<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$success_message = $error_message = "";

// Check session for business ID
if (empty($BUSINESS_ID)) {
    die("Business ID not set. Please login again.");
}

function processFilename($filename)
{
    return preg_replace('/[ ,\(\)\[\]\-]/', '_', $filename);
}

// === UPDATE logic ===
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    $expense_id = intval($_POST['expense_id'] ?? 0);
    $amount = floatval($_POST['amount'] ?? 0.0);
    $reason = trim($_POST['reason'] ?? '');
    $incurred_by = trim($_POST['incurred_by'] ?? '');
    $expense_date = $_POST['expense_date'] ?? null;

    $file_name = $_FILES['file']['name'] ?? '';
    $file_name = processFilename($file_name);
    $file_tmp = $_FILES['file']['tmp_name'] ?? '';
    $upload_dir = $ROOT_DIR . '/uploads/expenses';
    $unique_file_name = uniqid() . '-' . basename($file_name);
    $file_path = $upload_dir . '/' . $unique_file_name;
    $relative_file_path = '/uploads/expenses/' . $unique_file_name;

    if (empty($amount) || empty($reason)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        if (!empty($file_name) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            if (!is_dir($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }

            if (move_uploaded_file($file_tmp, $file_path)) {
                $stmt = $db->prepare("UPDATE expenses SET amount = ?, reason = ?, incurred_by = ?, expense_date = ?, file_name = ?, file_path = ? 
                                      WHERE expense_id = ? AND business_id = ?");
                $stmt->bind_param("dssssssi", $amount, $reason, $incurred_by, $expense_date, $file_name, $relative_file_path, $expense_id, $BUSINESS_ID);
            } else {
                $error_message = 'Error uploading file.';
            }
        } else {
            $stmt = $db->prepare("UPDATE expenses SET amount = ?, reason = ?, incurred_by = ?, expense_date = ? 
                                  WHERE expense_id = ? AND business_id = ?");
            $stmt->bind_param("dsssii", $amount, $reason, $incurred_by, $expense_date, $expense_id, $BUSINESS_ID);
        }

        if (isset($stmt) && $stmt->execute()) {
            $success_message = 'Expense updated successfully.';
        } else {
            $error_message = 'Error updating expense: ' . ($stmt ? $stmt->error : '');
        }
        $stmt?->close();
    }
}

// === DELETE logic ===
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['delete'])) {
    $expense_id = intval($_POST['expense_id'] ?? 0);

    $stmt = $db->prepare("DELETE FROM expenses WHERE expense_id = ? AND business_id = ?");
    $stmt->bind_param("ii", $expense_id, $BUSINESS_ID);

    if ($stmt->execute()) {
        $success_message = 'Expense deleted successfully.';
    } else {
        $error_message = 'Error deleting expense: ' . $stmt->error;
    }
    $stmt->close();
}

// === FETCH logic for form population ===
$expense_id = intval($_GET['expense_id'] ?? 0);
$expense = [];

if ($expense_id > 0) {
    $stmt = $db->prepare("SELECT * FROM expenses WHERE expense_id = ? AND business_id = ?");
    $stmt->bind_param("ii", $expense_id, $BUSINESS_ID);
    $stmt->execute();
    $result = $stmt->get_result();
    $expense = $result->fetch_assoc();
    $stmt->close();
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
                                <h6 class="card-title mb-0">Update Expense</h6>
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
                                                value="<?php echo htmlspecialchars($expense['amount'] ?? ''); ?>"
                                                required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Reason *</label>
                                            <input type="text" class="form-control" name="reason"
                                                value="<?php echo htmlspecialchars($expense['reason'] ?? ''); ?>"
                                                required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Incurred By</label>
                                            <input type="text" class="form-control" name="incurred_by"
                                                value="<?php echo htmlspecialchars($expense['incurred_by'] ?? ''); ?>">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Expense Date</label>
                                            <input type="datetime-local" class="form-control" name="expense_date"
                                                value="<?php echo htmlspecialchars($expense['expense_date'] ?? ''); ?>">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Upload File</label>
                                            <input type="file" class="form-control" name="file" accept="*/*">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input type="hidden" name="expense_id"
                                        value="<?php echo htmlspecialchars($expense_id); ?>">
                                    <button type="submit" name="update" class="btn btn-primary">Update</button>
                                    <button type="reset" class="btn btn-default">Clear</button>
                                </div>
                            </form>
                            <form method="post" style="margin-top: 10px;">
                                <input type="hidden" name="expense_id"
                                    value="<?php echo htmlspecialchars($expense_id); ?>">
                                <button type="submit" name="delete" class="btn btn-danger">Delete</button>
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