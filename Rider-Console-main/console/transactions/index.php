<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

include $ROOT_DIR . '/utils/payments.php';



// Fetch all payments
$rental_payments = Payments::fetchAllPayments($BUSINESS_ID);
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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Transactions</h1>
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
                                        <i class="fas fa-plus"></i> Add Payment Record
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="TransactionList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0"></th>
                                        <th class="border-top-0">Reference</th>
                                        <th class="border-top-0">Payment Type</th>
                                        <th class="border-top-0">Rider Name</th>
                                        <th class="border-top-0">Rider Phone</th>
                                        <th class="border-top-0">Vehicle Registration</th>
                                        <th class="border-top-0">Amount Paid</th>
                                        <th class="border-top-0">Start Date</th>
                                        <th class="border-top-0">Rental Status</th>
                                        <th class="border-top-0">Payment Date</th>
                                        <th class="border-top-0" title="paid on day x from rental start">Elapsed Time
                                        </th>
                                        <th class="border-top-0">Payment Method</th>
                                        <th class="border-top-0">Payment Note</th>
                                        <th class="border-top-0">Payment Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($transaction = $rental_payments->fetch_assoc()): ?>
                                        <?php
                                        // Calculate elapsed time
                                        $start_date = new DateTime($transaction['rental_start_date']);
                                        $payment_date = new DateTime($transaction['payment_date']);
                                        $elapsed_interval = $start_date->diff($payment_date);
                                        $elapsed_time = $elapsed_interval->format('%a days'); // Format as "X days"
                                        ?>
                                        <tr>
                                            <td><?= $transaction['payment_id'] ?> </td>
                                            <td><?= $transaction['reference'] ?> </td>
                                            <td><?= htmlspecialchars($transaction['payment_type']) ?></td>
                                            <td>
                                                <a
                                                    href="/console/transactions/rider-daily.php?id=<?= htmlspecialchars($transaction['rider_id']) ?>">
                                                    <?= htmlspecialchars($transaction['rider_name']) ?>
                                                </a>
                                            </td>
                                            <td><?= htmlspecialchars($transaction['rider_phone']) ?></td>
                                            <td><?= htmlspecialchars($transaction['vehicle_registration']) ?></td>
                                            <td><?= number_format($transaction['amount_paid'], 2) ?> TZS</td>
                                            <td><?= date('d/m/Y H:i', strtotime($transaction['rental_start_date'])) ?></td>
                                            <td><?= ucfirst(htmlspecialchars($transaction['rental_status'])) ?></td>
                                            <td><?= date('d/m/Y H:i', strtotime($transaction['payment_date'])) ?></td>
                                            <td><?= $elapsed_time ?></td> <!-- Display elapsed time -->
                                            <td><?= ucfirst(htmlspecialchars($transaction['payment_method'])) ?></td>
                                            <td><?= ucfirst(htmlspecialchars($transaction['payment_note'])) ?></td>
                                            <td><?= ucfirst(htmlspecialchars($transaction['payment_status'])) ?></td>
                                            <td>
                                                <a href="/console/transactions/update.php?edit=<?= $transaction['payment_id'] ?>"
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
        var transaction_table;
        $(document).ready(function () {
            transaction_table = $('#TransactionList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                    order: [[0, 'desc']],
                    dom: 'Bfrtip',
                    buttons: [
                        {
                            extend: 'excelHtml5',
                            title: 'Transactions_List',
                            text: 'Export to Excel',
                            className: 'btn btn-success rounded border-none',
                        }
                    ]
                });

        });
    </script>
</body>

</html>