<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
require_once $ROOT_DIR . '/engine/db.php';
require_once $ROOT_DIR . '/utils/collections.php';

$admin_id = 1;  // Example admin ID, should be dynamically fetched based on logged-in user.
$amount = $transaction_note = $target_phone = $transaction_taken_at = "";
$success_message = $error_message = "";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get posted values and sanitize
    $amount = isset($_POST['amount']) ? floatval(trim($_POST['amount'])) : 0;
    $transaction_note = isset($_POST['transaction_note']) ? trim($_POST['transaction_note']) : '';
    $target_phone = isset($_POST['target_phone']) ? trim($_POST['target_phone']) : '';
    $transaction_taken_at = isset($_POST['transaction_taken_at']) ? trim($_POST['transaction_taken_at']) : date('Y-m-d H:i:s');

    // Validate required fields
    if (empty($amount) || empty($target_phone) || empty($transaction_taken_at)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        // If no errors, call the method to create a new collection
        if (empty($error_message)) {
            $collection_id = Collections::createCollection($admin_id, $amount, $transaction_note, $target_phone, $transaction_taken_at, $BUSINESS_ID);
            if ($collection_id) {
                $success_message = 'Collection recorded successfully. Collection ID: ' . $collection_id;
                // Reset form values
                $amount = $transaction_note = $target_phone = $transaction_taken_at = "";
            } else {
                $error_message = 'Error recording the collection. Please try again.';
            }
        }
    }
}

?>

<body class="layout-1" data-luno="theme-blue">
    <!-- start: sidebar -->
    <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

    <!-- start: body area -->
    <div class="wrapper">
        <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

        <!-- start: page body -->
        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div class="container">

                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col text-start">
                                        <a href="/console/management/collection.php" class="btn btn-primary">
                                            <i class="fas fa-arrow-left"></i> Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-header">
                                <h6 class="card-title mb-0">Record New Collection</h6>
                            </div>
                            <form method="post">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success" style="opacity:1">
                                            <?php echo htmlspecialchars($success_message); ?>
                                        </div>

                                        <script type="text/javascript">
                                            setTimeout(function () {
                                                window.location.href = '/console/management/collections.php';
                                            }, 1500);
                                        </script>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger" style="opacity:1">
                                            <?php echo htmlspecialchars($error_message); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="row g-3">
                                        <!-- Amount -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Amount *</label>
                                            <input type="number" class="form-control form-control-lg" name="amount"
                                                required value="<?php echo htmlspecialchars($amount); ?>" step="0.01"
                                                placeholder="Enter amount collected">
                                        </div>

                                        <!-- Transaction Note -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Transaction Note</label>
                                            <input type="text" class="form-control form-control-lg"
                                                name="transaction_note"
                                                value="<?php echo htmlspecialchars($transaction_note); ?>"
                                                placeholder="Optional note for the transaction">
                                        </div>

                                        <!-- Target Phone -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Target Phone *</label>
                                            <input type="text" class="form-control form-control-lg" name="target_phone"
                                                required value="<?php echo htmlspecialchars($target_phone); ?>"
                                                placeholder="Enter target phone number">
                                        </div>

                                        <!-- Transaction Taken At -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Transaction Taken At *</label>
                                            <input type="datetime-local" class="form-control form-control-lg" name="transaction_taken_at"
                                                required value="<?php echo htmlspecialchars($transaction_taken_at); ?>"
                                                placeholder="Enter transaction datetime">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Record Collection</button>
                                    <button type="reset" class="btn btn-default">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <script src="/assets/js/theme.js"></script>
</body>

</html>