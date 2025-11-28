<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

// Fetch the joined data
$query = "
SELECT
    r.name AS rider_name,
    r.phone AS rider_phone,
    r.email AS rider_email,
    r.address AS rider_address,
    r.driver_license_no AS rider_license,
    m.registration_no AS vehicle_registration_no,
    m.model AS vehicle_model,
    m.daily_rental_fee,
    ra.total_amount_due,
    p.amount_paid,
    r.registration_date AS rider_registration_date,
    ra.rental_start_date,
    ra.rental_end_date,
    p.payment_date,
    m.status AS vehicle_status,
    ra.status AS rental_status,
    p.payment_status,
    p.payment_method,
    p.payment_type,
    p.payment_note
FROM payments p
INNER JOIN rental_agreements ra ON p.rental_id = ra.rental_id
INNER JOIN riders r ON ra.rider_id = r.rider_id
INNER JOIN vehicles m ON ra.vehicle_id = m.vehicle_id
ORDER BY p.payment_date DESC
";

$result = $db->query($query);
?>

<link rel="stylesheet" href="/assets/cssbundle/dataTables.min.css">

<body class="layout-1" data-luno="theme-blue">
    <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

    <div class="wrapper">
        <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div class="container-fluid">
                <div class="col-md-12 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-end">
                                    <a href="#" class="btn btn-primary">
                                        <i class=""></i> [Admin Preview] Unfiltered Transactions Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="PaymentList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th>Payment Date</th>
                                        <th>Rider Name</th>
                                        <th>Rider Phone</th>
                                        <th>Rider Email</th>
                                        <th>Rider Address</th>
                                        <th>Rider License</th>
                                        <th>Vehicle Registration No</th>
                                        <th>Vehicle Model</th>
                                        <th>Daily Rental Fee</th>
                                        <th>Total Amount Due</th>
                                        <th>Amount Paid</th>
                                        <th>Rider Registration Date</th>
                                        <th>Rental Start Date</th>
                                        <th>Rental End Date</th>
                                        <th>Vehicle Status</th>
                                        <th>Rental Status</th>
                                        <th>Payment Status</th>
                                        <th>Payment Method</th>
                                        <th>Payment Type</th>
                                        <th>Payment Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($row = $result->fetch_assoc()): ?>
                                        <tr>
                                            <td><?= htmlspecialchars($row['payment_date']) ?></td>
                                            <td><?= htmlspecialchars($row['rider_name']) ?></td>
                                            <td><?= htmlspecialchars($row['rider_phone']) ?></td>
                                            <td><?= htmlspecialchars($row['rider_email']) ?></td>
                                            <td><?= htmlspecialchars($row['rider_address']) ?></td>
                                            <td><?= htmlspecialchars($row['rider_license']) ?></td>
                                            <td><?= htmlspecialchars($row['vehicle_registration_no']) ?></td>
                                            <td><?= htmlspecialchars($row['vehicle_model']) ?></td>
                                            <td><?= htmlspecialchars(number_format($row['daily_rental_fee'], 2)) ?></td>
                                            <td><?= htmlspecialchars(number_format($row['total_amount_due'], 2)) ?></td>
                                            <td><?= htmlspecialchars(number_format($row['amount_paid'], 2)) ?></td>
                                            <td><?= htmlspecialchars($row['rider_registration_date']) ?></td>
                                            <td><?= htmlspecialchars($row['rental_start_date']) ?></td>
                                            <td><?= htmlspecialchars($row['rental_end_date']) ?></td>
                                            <td><?= htmlspecialchars($row['vehicle_status']) ?></td>
                                            <td><?= htmlspecialchars($row['rental_status']) ?></td>
                                            <td><?= htmlspecialchars($row['payment_status']) ?></td>
                                            <td><?= htmlspecialchars($row['payment_method']) ?></td>
                                            <td><?= htmlspecialchars($row['payment_type']) ?></td>
                                            <td><?= htmlspecialchars($row['payment_note']) ?></td>
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
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.1/css/buttons.dataTables.min.css">
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.html5.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#PaymentList').addClass('nowrap').dataTable({
                responsive: true,
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        title: 'Payment Report',
                        text: 'Export to Excel',
                        className: 'btn btn-success rounded border-none',
                    }
                ]
            });
        });
    </script>
</body>

</html>