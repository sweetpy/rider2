<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

include $ROOT_DIR . '/utils/payments.php';

$business_id = $BUSINESS_ID;

$riders_payments = Payments::fetchRidersPayments($business_id);
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
                <div class="col-md-12 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-end">
                                    <a href="/console/transactions/add.php" class="btn btn-primary">
                                        <i class="fas fa-plus"></i> Add Payment Record
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="RiderList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0" title="The rider's name as registered in the system.">
                                            Rider Name</th>
                                        <th class="border-top-0" title="The rider's phone number for contact purposes.">
                                            Phone</th>
                                        <th class="border-top-0"
                                            title="Total amount paid by the rider for onboarding fees.">Total Paid
                                            Onboarding Fees</th>
                                        <th class="border-top-0"
                                            title="Total amount paid for the daily rental of the Vehicle.">Total Paid
                                            Daily Rental Fees</th>
                                        <th class="border-top-0" title="Full Rental Agreement Amount">Rental Agreement
                                            Amount</th>
                                        <th class="border-top-0"
                                            title="The total amount of all fees paid by the rider, including onboarding and daily fees.">
                                            All Fees Total Paid </th>
                                        <th class="border-top-0"
                                            title="The number of days elapsed for the rental agreement.">
                                            Days Elapsed</th>
                                        <th>
                                            More Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($rider = $riders_payments->fetch_assoc()): ?>
                                        <tr>
                                            <td class="d-flex align-items-center">
                                                <a href="rider-detail.php?id=<?= $rider['rider_id'] ?>"
                                                    class="d-block w60"></a>
                                                <div class="ms-3">
                                                    <strong><?= htmlspecialchars($rider['rider_name']) ?></strong>
                                                </div>
                                            </td>
                                            <td><?= htmlspecialchars($rider['rider_phone']) ?></td>
                                            <td><?= number_format($rider['total_paid_onboarding_fees'] ?? 0, 2) ?> TZS</td>
                                            <td><?= number_format($rider['total_paid_daily_rental_fees'] ?? 0, 2) ?> TZS
                                            </td>
                                            <td><?= number_format($rider['total_amount_due'] ?? 0, 2) ?> TZS</td>
                                            <td><?= number_format($rider['total_paid_all_fees'] ?? 0, 2) ?> TZS</td>
                                            <td><?= htmlspecialchars($rider['days_elapsed']) ?> Days</td>
                                            <td>
                                                <a href="/console/transactions/rider-daily.php?id=<?= $rider['rider_id'] ?>"
                                                    class="btn btn-sm btn-secondary m-1">
                                                    <i class="fa fa-calendar-day"></i> Daily Report
                                                </a>
                                                <a href="/console/transactions/rider-weekly.php?id=<?= $rider['rider_id'] ?>"
                                                    class="btn btn-sm btn-primary m-1">
                                                    <i class="fa fa-calendar-week"></i> Weekly Report
                                                </a>
                                                <a href="/console/transactions/rider-pending-payments.php?id=<?= $rider['rider_id'] ?>"
                                                    class="btn btn-sm btn-warning m-1">
                                                    <i class="fa fa-exclamation-circle"></i> Pending Payments
                                                </a>
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
            $('#RiderList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true, dom: 'Bfrtip',
                    buttons: [
                        {
                            extend: 'excelHtml5',
                            title: 'Rider-Payments',
                            text: 'Export to Excel',
                            className: 'btn btn-success rounded border-none',
                        }
                    ]
                });
        });
    </script>
</body>

</html>