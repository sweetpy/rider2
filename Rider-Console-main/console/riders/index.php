<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
include $ROOT_DIR . '/utils/riders.php';

$business_id = $BUSINESS_ID;

$riders = Riders::fetchAllRiders($business_id);
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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Riders</h1>
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
                                        <i class="fas fa-plus"></i> Add Rider
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="RiderList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0">Rider Name</th>
                                        <th class="border-top-0">Email</th>
                                        <th class="border-top-0">Phone</th>
                                        <th class="border-top-0">Address</th>
                                        <th class="border-top-0">Driver License No</th>
                                        <th class="border-top-0">Registration Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- if data is available -->
                                    <?php if (!$riders): ?>
                                        <tr>
                                            <td colspan="7" class="text-center">No data available</td>
                                        </tr>
                                    <?php else: ?>
                                        <?php foreach ($riders as $rider): ?>
                                            <tr>
                                                <td class="d-flex align-items-center">
                                                    <div class="ms-3">
                                                        <strong><?= htmlspecialchars($rider['name']) ?></strong>
                                                    </div>
                                                </td>
                                                <td><?= htmlspecialchars($rider['email']) ?></td>
                                                <td><?= htmlspecialchars($rider['phone']) ?></td>
                                                <td><?= htmlspecialchars($rider['address']) ?></td>
                                                <td><?= htmlspecialchars($rider['driver_license_no']) ?></td>
                                                <td><?= htmlspecialchars($rider['registration_date']) ?></td>
                                                <td>
                                                    <a href="/console/riders/update.php?rider_id=<?= $rider['rider_id'] ?>"
                                                        class="btn btn-sm btn-primary">edit</a>
                                                </td>
                                            </tr>
                                        <?php endforeach; ?>
                                    <?php endif; ?>
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
        <?php if ($riders != false): ?>
            $(document).ready(function () {
                $('#RiderList')
                    .addClass('nowrap')
                    .dataTable({
                        responsive: true,
                    });
            });
        <?php endif; ?>
    </script>
</body>

</html>