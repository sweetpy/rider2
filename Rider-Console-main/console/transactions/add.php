<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
require_once $ROOT_DIR . '/utils/payments.php';

$business_id = $BUSINESS_ID;

$rental_id = $payment_date = $amount_paid = $payment_method = $payment_status = "";
$success_message = $error_message = $reference = $payment_type = "";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get posted values and sanitize
    $rental_id = isset($_POST['rental_id']) ? trim($_POST['rental_id']) : '';
    $payment_date = isset($_POST['payment_date']) ? trim($_POST['payment_date']) : date('Y-m-d'); // Default to today
    $amount_paid = isset($_POST['amount_paid']) ? trim($_POST['amount_paid']) : 0.00;
    $payment_method = isset($_POST['payment_method']) ? trim($_POST['payment_method']) : 'cash';
    $payment_status = isset($_POST['payment_status']) ? trim($_POST['payment_status']) : 'completed';
    $reference = isset($_POST['reference']) ? trim($_POST['reference']) : '';
    $payment_type = isset($_POST['payment_type']) ? trim($_POST['payment_type']) : '';
    $payment_operation = isset($_POST['payment_operation']) ? trim($_POST['payment_operation']) : '';

    $payment_date .= ' ' . date('H:i:s');
    $total_paid_onboarding_fee = Payments::fetchRentalTotalOnboarding($rental_id, $business_id) ?? 0;

    // Business ID from session
    $business_id = $_SESSION['business_id'] ?? null;

    if (!$business_id) {
        $error_message = "Error: Business context missing.";
    } else {
        // Call createPayment function
        if ($payment_type == 'daily') {
            if ($payment_operation == "specific") {
                $message = Payments::createPayment($rental_id, $payment_date, $amount_paid, $payment_method, $payment_status, $reference, $payment_type, '', $business_id);
            } else {
                $message = "Error: We can't process your payment";
            }
        } else if ($payment_type == 'onboarding') {
            if ((int) $total_paid_onboarding_fee >= 150000) {
                $message = "Error: This driver has already paid 150,000 TZS onboarding fee. Total: " . number_format($total_paid_onboarding_fee) . " TZS";
            } else {
                $message = Payments::createPayment($rental_id, $payment_date, $amount_paid, $payment_method, $payment_status, $reference, $payment_type, '', $business_id);
            }
        } else {
            $message = "Error: Invalid payment type.";
        }

        // Display message
        $error_message = '';
        $success_message = '';
        if (strpos($message, 'Error') !== false) {
            $error_message = $message;
        } else {
            $success_message = $message;
            // Reset form values
            $rental_id = $payment_date = $amount_paid = $payment_method = $payment_status = $reference = "";
        }
    }
}
?>


<body class="layout-1" data-luno="theme-blue">
    <!-- start: sidebar -->

    <body class="layout-1" data-luno="theme-blue">
        <!-- start: sidebar -->
        <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

        <!-- start: body area -->
        <div class="wrapper">
            <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

            <!-- start: page body -->
            <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
                <div class="container">
                    <div class="row align-items-center mb-5">
                        <div class="col-auto">
                            <h1 class="fs-5 color-900 mt-1 mb-0">Transactions</h1>
                            <small class="text-muted">
                                <?= $FULL_NAME ?> accessing via <?= $BUSINESS_NAME; ?> channel &nbsp;&nbsp;
                                <span id="datetime"></span>
                                <script>document.getElementById('datetime').textContent = new Date().toLocaleString();</script>
                            </small>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col text-start">
                                            <a href="/console/transactions/" class="btn btn-primary">
                                                <i class="fas fa-arrow-left"></i> Back
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <h6 class="card-title mb-0">Add New Payment</h6>
                                </div>
                                <form method="post">
                                    <div class="card-body">
                                        <?php if (!empty($success_message)): ?>
                                            <div class="alert alert-success text-success" <?php if (!empty($success_message)): ?> style="opacity: 1" <?php endif; ?>>
                                                <?php echo htmlspecialchars($success_message); ?>, Please wait for page
                                                redirect
                                            </div>
                                            <script type="text/javascript">
                                                setTimeout(function () {
                                                    window.location.href = '/console/transactions/';
                                                }, 3000);
                                            </script>
                                        <?php endif; ?>
                                        <?php if (!empty($error_message)): ?>
                                            <div class="alert alert-danger" <?php if (!empty($error_message)): ?>
                                                    style="opacity: 1" <?php endif; ?>>
                                                <?php echo htmlspecialchars($error_message); ?>
                                            </div>
                                        <?php endif; ?>
                                        <div class="row g-3">
                                            <!-- Rental Agreement Selection -->
                                            <div class="col-sm-6">
                                                <label class="form-label">Rental Agreement *</label>
                                                <select name="rental_id" class="form-control form-control-lg" required>
                                                    <option value="">Select Rental Agreement</option>
                                                    <?php
                                                    // Query to fetch active rental agreements
                                                    if ($business_id) {
                                                        $query = "SELECT ra.rental_id, r.name AS rider_name, v.registration_no 
                                                            FROM rental_agreements ra
                                                            JOIN riders r ON ra.rider_id = r.rider_id
                                                            JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
                                                            WHERE ra.status = 'active' AND ra.business_id = ?";

                                                        $stmt = $db->prepare($query);
                                                        $stmt->bind_param("i", $business_id);
                                                        $stmt->execute();
                                                        $rental_result = $stmt->get_result();

                                                        while ($rental = $rental_result->fetch_assoc()) {
                                                            echo "<option value='" . $rental['rental_id'] . "' " . ($rental_id == $rental['rental_id'] ? 'selected' : '') . ">"
                                                                . htmlspecialchars($rental['rider_name']) . " - " . htmlspecialchars($rental['registration_no'])
                                                                . "</option>";
                                                        }

                                                        $stmt->close();
                                                    } else {
                                                        echo "<option disabled>No business context available.</option>";
                                                    }
                                                    ?>
                                                </select>
                                            </div>

                                            <!-- Payment Type -->
                                            <div class="col-sm-6">
                                                <label class="form-label">Payment Type</label>
                                                <select name="payment_type" id="payment_type"
                                                    class="form-control form-control-lg">
                                                    <option value="daily" <?php echo ($payment_type == 'daily' ? 'selected' : ''); ?>>Daily</option>
                                                    <option value="onboarding" <?php echo ($payment_type == 'onboarding' ? 'selected' : ''); ?>>Onboarding</option>
                                                </select>
                                            </div>

                                            <!-- Reference Number-->
                                            <div class="col-sm-6">
                                                <label class="form-label">Payment Reference *</label>
                                                <input type="text" name="reference" class="form-control form-control-lg"
                                                    required value="<?php echo htmlspecialchars($reference); ?>"
                                                    step="0.01">
                                            </div>

                                            <!-- Amount Paid -->
                                            <div class="col-sm-6">
                                                <label class="form-label">Amount Paid *</label>
                                                <input type="number" name="amount_paid" id="amount_paid"
                                                    class="form-control form-control-lg" required
                                                    value="<?php echo htmlspecialchars($amount_paid); ?>" step="1000">
                                                <span class="text-danger" id="payment_feedback"></span>
                                            </div>

                                            <!-- Payment Method -->
                                            <div class="col-sm-6">
                                                <label class="form-label">Payment Method</label>
                                                <select name="payment_method" class="form-control form-control-lg">
                                                    <option value="cash" <?php echo ($payment_method == 'cash' ? 'selected' : ''); ?>>Cash</option>
                                                    <option value="mobile money" <?php echo ($payment_method == 'mobile money' ? 'selected' : ''); ?>>Mobile Money</option>
                                                    <option value="card" <?php echo ($payment_method == 'card' ? 'selected' : ''); ?>>Card</option>
                                                </select>
                                            </div>

                                            <!-- Payment Date -->
                                            <div class="col-sm-6">
                                                <label class="form-label">Payment Date</label>
                                                <input type="date" name="payment_date"
                                                    class="form-control form-control-lg"
                                                    value="<?php echo date('Y-m-d'); ?>" required>
                                            </div>

                                            <!-- Payment Operation -->
                                            <div class="col-sm-6 col-md-8">
                                                <label class="form-label"><b>Payment Operation (For daily
                                                        payments)</b></label>
                                                <select name="payment_operation" id="payment_operation"
                                                    class="form-control form-control-lg">
                                                    <option value="specific">
                                                        Just pay this specified date. (You can distribute excess in
                                                        payment log.)
                                                    </option>
                                                    <!-- <option value="auto">
                                                        Pay specified date, And also pay previous unpaid days.
                                                    </option> -->
                                                </select>
                                            </div>

                                            <!-- Payment Status -->
                                            <div class="col-sm-6 col-md-4">
                                                <label class="form-label">Payment Status</label>
                                                <select name="payment_status" class="form-control form-control-lg">
                                                    <option value="completed" <?php echo ($payment_status == 'completed' ? 'selected' : ''); ?>>Completed</option>
                                                    <option value="pending" <?php echo ($payment_status == 'pending' ? 'selected' : ''); ?>>Pending</option>
                                                    <option value="failed" <?php echo ($payment_status == 'failed' ? 'selected' : ''); ?>>Failed</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Add Payment</button>
                                        <button type="reset" class="btn btn-default">Clear</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <script src="/assets/js/theme.js"></script>

        <script>
            var amount_paid = document.getElementById("amount_paid")
            var payment_type = document.getElementById("payment_type")
            var payment_operation = document.getElementById("payment_operation")
            var payment_feedback = document.getElementById("payment_feedback")

            function daily_payment_validation() {
                var amount = amount_paid.value
                var operation = payment_type.value
                if (amount > 10000 && operation == "daily" && <?= $BUSINESS_ID ?> == 1) {
                    payment_feedback.innerHTML = "⚠️ ALERT <br> Amount exceeding 10,000 /- Tsh will be distributed to pay previous skipped daily paydays. Continue if you know what you are doing."
                } else {
                    payment_feedback.innerHTML = ""
                }
            }

            payment_operation.oninput = () => {
                console.log(payment_operation.value)
                if (payment_operation.value == "auto") {
                    daily_payment_validation()
                } else {
                    payment_feedback.innerHTML = ""
                }
            }

            amount_paid.oninput = () => {
                daily_payment_validation()
            }

            payment_type.oninput = () => {
                if (payment_type.value == "daily") {
                    daily_payment_validation()
                } else { payment_feedback.innerHTML = "" }
            }


        </script>
    </body>

    </html>