<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

if (!is_numeric($BUSINESS_ID)) {
    die("Invalid business ID.");
}

$query = "SELECT ra.rental_id, r.name AS rider_name, v.registration_no AS vehicle_registration, ra.rental_start_date, ra.rental_end_date, ra.total_amount_due, ra.status 
          FROM rental_agreements ra
          JOIN riders r ON ra.rider_id = r.rider_id
          JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
          WHERE ra.business_id = ?";

$stmt = $db->prepare($query);
$stmt->bind_param("i", $BUSINESS_ID);
$stmt->execute();
$rental_agreements = $stmt->get_result();
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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Rentals</h1>
                        <small class="text-muted"><?= $FULL_NAME ?> accessing via  <?= $BUSINESS_NAME; ?> channel.</small>
                    </div>
                </div>
                <div class="col-md-12 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-end">
                                    <a href="add.php" class="btn btn-primary">
                                        <i class="fas fa-plus"></i> Add Rental Agreement
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="RentalAgreementList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0">Rider Name</th>
                                        <th class="border-top-0">Vehicle Registration</th>
                                        <th class="border-top-0">Start Date</th>
                                        <th class="border-top-0">End Date</th>
                                        <th class="border-top-0">Total Amount Due</th>
                                        <th class="border-top-0">Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($agreement = $rental_agreements->fetch_assoc()): ?>
                                        <tr>
                                            <td><?= htmlspecialchars($agreement['rider_name']) ?></td>
                                            <td><?= htmlspecialchars($agreement['vehicle_registration']) ?></td>
                                            <td><?= date('d/m/Y H:i', strtotime($agreement['rental_start_date'])) ?></td>
                                            <td>
                                                <?= $agreement['rental_end_date'] ? date('d/m/Y H:i', strtotime($agreement['rental_end_date'])) : 'N/A' ?>
                                            </td>
                                            <td><?= number_format($agreement['total_amount_due'], 2) ?> TZS</td>
                                            <td><?= ucfirst(htmlspecialchars($agreement['status'])) ?></td>
                                            <td>
                                                <a href="/console/rentals/update.php?rental_id=<?= $agreement['rental_id'] ?>"
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

    <!-- DataTables Buttons Extension -->
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.1/css/buttons.dataTables.min.css">
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/dataTables.buttons.min.js"></script>

    <!-- JSZip -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

    <!-- HTML5 Export Buttons -->
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.html5.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#RentalAgreementList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true, dom: 'Bfrtip',
                    buttons: [
                        {
                            extend: 'excelHtml5',
                            title: 'Rentals',
                            text: 'Export to Excel',
                            className: 'btn btn-success rounded border-none',
                        }
                    ]
                });
        });
    </script>
</body>

</html>