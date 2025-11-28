<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

include $ROOT_DIR . '/utils/collections.php';

// Fetch all collections
$collections = Collections::fetchAllCollections($BUSINESS_ID);
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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Collections</h1>
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
                                    <a href="create-collection.php" class="btn btn-primary">
                                        <i class="fas fa-plus"></i> Add Collection Record
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="CollectionList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0"></th>
                                        <th class="border-top-0">Admin Name</th>
                                        <th class="border-top-0">Amount Collected</th>
                                        <th class="border-top-0">Collection Date</th>
                                        <th class="border-top-0">Transaction Taken At</th>
                                        <th class="border-top-0">Target Phone</th>
                                        <th class="border-top-0">Transaction Note</th>
                                        <th class="border-top-0"></th> <!-- This is the missing column header -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($transaction = $collections->fetch_assoc()): ?>
                                        <tr>
                                            <td><?= $transaction['collection_id'] ?> </td>
                                            <td>
                                                <a href="#id=<?= htmlspecialchars($transaction['admin_id']) ?>">
                                                    <?= htmlspecialchars($transaction['admin_username']) ?>
                                                </a>
                                            </td>
                                            <td><?= number_format($transaction['amount'], 2) ?> TZS</td>
                                            <td><?= date('d/m/Y H:i', strtotime($transaction['collection_date'])) ?></td>
                                            <td><?= date('d/m/Y H:i', strtotime($transaction['transaction_taken_at'])) ?>
                                            </td>
                                            <td><?= htmlspecialchars($transaction['target_phone']) ?></td>
                                            <td><?= htmlspecialchars($transaction['transaction_note']) ?></td>
                                            <td><!-- Add any actions, buttons, or empty space for the last column here -->
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
            $('#CollectionList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                    order: [[0, 'desc']] // Order by the first column (index 0) in descending order
                });
        });
    </script>
</body>

</html>