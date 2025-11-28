<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$success_message = $error_message = "";

function processFilename($filename)
{
    return preg_replace('/[ ,\(\)\[\]\-]/', '_', $filename);
}

// Ensure business context is present
if (empty($BUSINESS_ID)) {
    die('Missing business context. Please log in again.');
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $amount = isset($_POST['amount']) ? floatval($_POST['amount']) : 0.0;
    $reason = isset($_POST['reason']) ? trim($_POST['reason']) : '';
    $incurred_by = isset($_POST['incurred_by']) ? trim($_POST['incurred_by']) : $FULL_NAME;
    $expense_date = isset($_POST['expense_date']) ? trim($_POST['expense_date']) : date('Y-m-d H:i:s');

    $file_name = $_FILES['file']['name'] ?? '';
    $file_name = processFilename($file_name);
    $file_tmp = $_FILES['file']['tmp_name'] ?? '';
    $upload_dir = $_SERVER['DOCUMENT_ROOT'] . '/uploads/expenses';
    $unique_file_name = uniqid() . '-' . basename($file_name);
    $file_path = $upload_dir . '/' . $unique_file_name;
    $relative_file_path = '/uploads/expenses/' . $unique_file_name;

    // Validate required fields
    if (empty($amount) || empty($reason)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        if (!empty($file_name) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            if (move_uploaded_file($file_tmp, $file_path)) {
                $stmt = $db->prepare("INSERT INTO expenses (amount, reason, incurred_by, expense_date, file_name, file_path, business_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("dsssssi", $amount, $reason, $incurred_by, $expense_date, $file_name, $relative_file_path, $BUSINESS_ID);

                if ($stmt->execute()) {
                    $success_message = 'Expense added successfully.';
                } else {
                    $error_message = 'Error adding expense: ' . $stmt->error;
                }
                $stmt->close();
            } else {
                $error_message = 'Error uploading file.';
            }
        } else {
            $stmt = $db->prepare("INSERT INTO expenses (amount, reason, incurred_by, expense_date, business_id) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("dsssi", $amount, $reason, $incurred_by, $expense_date, $BUSINESS_ID);

            if ($stmt->execute()) {
                $success_message = 'Expense added successfully.';
            } else {
                $error_message = 'Error adding expense: ' . $stmt->error;
            }
            $stmt->close();
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
                            <div class="card-header">
                                <h6 class="card-title mb-0">Add Expense</h6>
                            </div>
                            <form method="post" enctype="multipart/form-data">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success text-success" <?php if (!empty($success_message)): ?> style="opacity: 1" <?php endif; ?>>
                                            <?php echo htmlspecialchars($success_message); ?>, Please wait for page
                                            redirect
                                        </div>
                                        <script type="text/javascript">
                                            setTimeout(function () {
                                                window.location.href = '/console/expenses/';
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
                                        <div class="col-sm-6">
                                            <label class="form-label">Amount *</label>
                                            <input type="number" step="0.01" class="form-control" name="amount"
                                                required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Reason *</label>
                                            <input type="text" class="form-control" name="reason" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Incurred By</label>
                                            <input type="text" class="form-control" name="incurred_by"
                                                value="<?= $FULL_NAME ?>">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Expense Date</label>
                                            <input type="datetime-local" class="form-control" name="expense_date">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Upload File</label>
                                            <input type="file" class="form-control" name="file" accept="*/*">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Submit</button>
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
</body>

</html>