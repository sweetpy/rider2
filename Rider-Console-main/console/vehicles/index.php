<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

// Ensure business ID is set
if (empty($BUSINESS_ID)) {
    die('Error: Business ID not found.');
}

// Fetch vehicles belonging to the logged-in business
$query = "SELECT vehicle_id, registration_no, model, status, daily_rental_fee 
          FROM vehicles 
          WHERE business_id = ?";
$stmt = $db->prepare($query);
$stmt->bind_param("i", $BUSINESS_ID);
$stmt->execute();
$vehicles = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Vehicles</h1>
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
                                        <i class="fas fa-plus"></i> Add Vehicle
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="VehicleList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0">Registration No</th>
                                        <th class="border-top-0">Model</th>
                                        <th class="border-top-0">Status</th>
                                        <th class="border-top-0">Daily Rental Fee</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($vehicles as $vehicle): ?>
                                        <tr>
                                            <td><?= htmlspecialchars($vehicle['registration_no']) ?></td>
                                            <td><?= htmlspecialchars($vehicle['model']) ?></td>
                                            <td>
                                                <?php
                                                $status = htmlspecialchars($vehicle['status']);
                                                echo ucfirst($status);
                                                ?>
                                            </td>
                                            <td><?= number_format($vehicle['daily_rental_fee'], 2) ?> TZS</td>
                                            <td>
                                                <a href="/console/vehicles/update.php?vehicle_id=<?= $vehicle['vehicle_id'] ?>"
                                                    class="btn btn-sm btn-primary">Edit</a>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
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
            $('#VehicleList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                });
        });
    </script>
</body>

</html>