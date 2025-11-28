<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
include $ROOT_DIR . '/utils/business.php';

$business_id = isset($_GET['id']) ? intval($_GET['id']) : 0;
$business = Business::fetchById($business_id);

if (!$business) {
    die("Business not found or invalid ID.");
}

$business_name = $business['business_name'];
$business_type = $business['business_type'];
$success_message = $error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $business_name = isset($_POST['business_name']) ? trim($_POST['business_name']) : '';
    $business_type = isset($_POST['business_type']) ? trim($_POST['business_type']) : '';

    if (empty($business_name)) {
        $error_message = 'Please enter a valid business name.';
    } else {
        $result = Business::update($business_id, $business_name, $business_type);
        if ($result === true) {
            $success_message = 'Business updated successfully.';
        } else {
            $error_message = $result;
        }
    }
}
?>

<body class="layout-1" data-luno="theme-blue">
<?php include $ROOT_DIR . '/includes/sidebar.php'; ?>
<div class="wrapper">
    <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>
    <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-start">
                                    <a href="/apex/initiatives" class="btn btn-primary">
                                        <i class="fas fa-arrow-left"></i> Back
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header">
                            <h6 class="card-title mb-0">Edit Business</h6>
                        </div>
                        <form method="post">
                            <div class="card-body">
                                <?php if (!empty($success_message)): ?>
                                    <div class="alert alert-success" style="opacity:1;"><?php echo htmlspecialchars($success_message); ?></div>
                                    <script>
                                        setTimeout(function () {
                                            window.location.href = '/apex/initiatives';
                                        }, 2000);
                                    </script>
                                <?php endif; ?>
                                <?php if (!empty($error_message)): ?>
                                    <div class="alert alert-danger" style="opacity:1;"><?php echo htmlspecialchars($error_message); ?></div>
                                <?php endif; ?>

                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label class="form-label">Business Name *</label>
                                        <input type="text" class="form-control" name="business_name" required
                                               value="<?php echo htmlspecialchars($business_name); ?>">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label">Business Type</label>
                                        <input type="text" class="form-control" name="business_type"
                                               value="<?php echo htmlspecialchars($business_type); ?>">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Update Business</button>
                                <a href="/apex/initiatives" class="btn btn-secondary">Cancel</a>
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