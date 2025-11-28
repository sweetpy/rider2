<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

// Ensure BUSINESS_ID is set
if (empty($BUSINESS_ID)) {
    die('Business context is missing. Please log in again.');
}

// Fetch expenses data for the current business
$query = "
    SELECT 
        expense_id, amount, reason, incurred_by, expense_date, file_name, file_path 
    FROM expenses 
    WHERE business_id = ?
    ORDER BY expense_date DESC
";

$stmt = $db->prepare($query);
$stmt->bind_param("i", $BUSINESS_ID);
$stmt->execute();
$expenses = $stmt->get_result();
?>


<!-- Plugin css file -->
<link rel="stylesheet" href="/assets/cssbundle/dataTables.min.css">

<body class="layout-1" data-luno="theme-blue">
    <!-- start: sidebar -->
    <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

    <!-- start: body area -->
    <div class="wrapper">
        <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

        <!-- start: page body -->
        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div class="container-fluid">
                <div class="row align-items-center mb-5">
                    <div class="col-auto">
                        <h1 class="fs-5 color-900 mt-1 mb-0">Expenses</h1>
                        <small class="text-muted">
                            <?= $FULL_NAME ?> accessing via <?= $BUSINESS_NAME; ?> channel &nbsp;&nbsp;
                            <span id="datetime"></span>
                            <script>document.getElementById('datetime').textContent = new Date().toLocaleString();</script>
                        </small>
                    </div>
                </div>
                
                <div class="col-md-12 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-end">
                                    <a href="add.php" class="btn btn-primary">
                                        <i class="fas fa-plus"></i> Add Expense
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="ExpenseList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0">Amount</th>
                                        <th class="border-top-0">Reason</th>
                                        <th class="border-top-0">Incurred By</th>
                                        <th class="border-top-0">Expense Date</th>
                                        <th class="border-top-0">File Attachment</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($expense = $expenses->fetch_assoc()): ?>
                                        <tr>
                                            <td><?= htmlspecialchars($expense['amount']) ?></td>
                                            <td><?= htmlspecialchars($expense['reason']) ?></td>
                                            <td><?= htmlspecialchars($expense['incurred_by']) ?></td>
                                            <td><?= htmlspecialchars($expense['expense_date']) ?></td>
                                            <td>
                                                <?php if (!empty($expense['file_path'])): ?>
                                                    <a href="<?= htmlspecialchars($expense['file_path']) ?>" target="_blank">
                                                        View Attachment
                                                    </a>
                                                <?php else: ?>
                                                    No Attachment
                                                <?php endif; ?>
                                            </td>
                                            <td>
                                                <a href="update.php?expense_id=<?= $expense['expense_id'] ?>"
                                                    class="btn btn-sm btn-primary">Edit</a>
                                            </td>
                                        </tr>
                                    <?php endwhile; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="/assets/js/theme.js"></script>
    <script src="/assets/js/bundle/dataTables.bundle.js"></script>
    <script>
        $(document).ready(function () {
            $('#ExpenseList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                });
        });
    </script>
</body>

</html>