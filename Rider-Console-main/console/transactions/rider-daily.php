<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
require_once $ROOT_DIR . '/utils/riders.php';
require_once $ROOT_DIR . '/utils/payments.php';

$business_id = $BUSINESS_ID;


// Get rider id from request get
$rider_id = $_GET['id'];

// If not set, redirect to riders page
if (!$rider_id) {
    header('Location: /console/riders.php');
    exit();
}

// Get rider details
$rider = Riders::fetchRider($rider_id, $business_id);

// Get payment details
$payment_details = Payments::fetchRiderPaymentDetails($rider_id, $business_id);
$total_daily_paid = Payments::fetchRiderTotalDailyPaid($rider_id, $business_id);
$total_onboarding = Payments::fetchRiderTotalOnboarding($rider_id, $business_id);
$balance_due = Payments::fetchRiderBalanceDue($rider_id, $business_id);
$rental_agreement_amount = Payments::fetchRiderRentalAgreementAmount($rider_id, $business_id);


// Calculate remaining balance on rental
$remaining_on_rental = $rental_agreement_amount - ($total_daily_paid + $total_onboarding);

$daily_rental_fee = 10000;
?>

<style>
    .no-wrap {
        white-space: nowrap;
    }
</style>

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
                <div class="row g-3 my-1">
                    <div class="col">
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
                    </div>
                </div>

                <!-- Rider Payment Logs Card -->
                <div class="col-12">
                    <div class="card print_invoice">
                        <div class="card-header border-bottom fs-4">
                            <h5 class="card-title mb-0">Rider Payment Logs</h5>
                        </div>
                        <div class="card-body">
                            <!-- Rider Details -->
                            <div class="row mb-4">
                                <div class="col-12">
                                    <p class="form-control address">
                                        <?php echo $rider['name']; ?>, <br>
                                        <?php echo $rider['address']; ?> <br> Phone: <?php echo $rider['phone']; ?>
                                    </p>
                                </div>
                            </div>

                            <!-- Daily Transaction List -->
                            <div class="col-12 mt-3">
                                <div class="customer">
                                    <h6 class="customer-title">Daily Transaction List</h6>
                                    <table class="meta mb-3">
                                        <tbody>
                                            <tr>
                                                <td class="meta-head">Rider #</td>
                                                <td>Rider: <?php echo $rider['rider_id']; ?></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><?php echo date('F j, Y'); ?></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Daily Payments Table -->
                            <h6 class="mb-3 mt-3">Rider Daily Payment Logs</h6>
                            <table class="table items">
                                <thead>
                                    <tr>
                                        <th scope="col">Payment Date</th>
                                        <th scope="col">Payment Reference</th>
                                        <th scope="col">Payment Type</th>
                                        <th scope="col">Daily Amount Paid</th>
                                        <th scope="col">Balance Due</th>
                                        <th scope="col">Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($payment_details as $payment): ?>
                                        <tr class="item-row">
                                            <td class="item-name">
                                                <div class="delete-wpr">
                                                    <p><?php echo date('F j, Y', strtotime($payment['payment_date'])); ?>
                                                    </p>
                                                    <a class="delete" href="javascript:;" title="Remove row">-</a>
                                                </div>
                                            </td>
                                            <td class="description">
                                                <?php echo str_replace(',', ', ', $payment['payment_references']); ?>
                                            </td>
                                            <td class="description"><?php echo $payment['payment_type']; ?></td>
                                            <td><?php echo number_format($payment['total_amount_paid'], 2); ?></td>
                                            <td>
                                                <?php
                                                if ($payment['payment_type'] == 'daily') {
                                                    if ($payment['balance_due'] == 0) {
                                                        echo "<span class='text-success'>" . number_format($payment['balance_due'], 2) . "</span>";
                                                    } elseif ($payment['balance_due'] < 0) {
                                                        $payment_ids = $payment['payment_ids'];
                                                        $payment_ids = explode(',', $payment_ids);
                                                        $references = explode(',', $payment['payment_references']);

                                                        $excess_amount = -$payment['balance_due']; // Convert to positive
                                                        echo "<span class='text-primary'> Excess: +" . number_format($excess_amount, 2) . "</span> <br><br>";

                                                        echo "<ol>";
                                                        foreach ($payment_ids as $payment_id) {
                                                            $_payment = Payments::fetchPayment($payment_id, $business_id);
                                                            $_payment_reference = $_payment['reference'];
                                                            $_payment_amount = $_payment['amount_paid'];
                                                            $_payment_date = $_payment['payment_date'];

                                                            echo "<li class='mt-1'>";

                                                            if ($_payment_amount > $daily_rental_fee) {
                                                                // Excess payment action
                                                                echo "<a href='/console/transactions/fill-missing.php?rental_id={$payment['rental_id']}&payment_id={$payment_id}' 
                                                                            class='btn btn-sm btn-warning'>
                                                                            Distribute Excess from paid " . number_format($_payment_amount) . "
                                                                        </a>";
                                                            } else {
                                                                // Update transaction action
                                                                echo "<a href='/console/transactions/move_transaction.php?payment_id={$payment_id}' class='btn btn-sm btn-success'>
                                                                            Move Transaction
                                                                        </a>";
                                                                echo "<span class='text-dark bg-light px-2 py-1 rounded mx-2'>
                                                                            Extra Paid: +" . number_format($_payment_amount, 2) . " | Ref: {$_payment_reference} | Date: {$_payment_date}
                                                                        </span>";
                                                            }

                                                            echo "</li>"; // Close list item
                                                        }
                                                        echo "</ol>";
                                                    }
                                                } else {
                                                    echo "<span class='text-danger'>" . number_format(floatval($payment['balance_due']), 2) . "</span>";
                                                }

                                                ?>
                                            </td>

                                            <td style="max-width:320px" class=""><?php echo $payment['payment_notes']; ?>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>

                            <!-- Payment Summary -->
                            <div class="row mt-5">
                                <div class="col-sm-6">
                                    <div class="container mt-3">
                                        <div class="row">
                                            <div class="col-md-8 d-flex justify-content-between">
                                                <div class="total-line">Total Daily Paid</div>
                                                <div class="total-value">
                                                    <?php echo number_format($total_daily_paid, 2); ?>
                                                </div>
                                            </div>
                                            <div class="col-md-8 d-flex justify-content-between">
                                                <div class="total-line">Total Onboarding</div>
                                                <div class="total-value">
                                                    <?php echo number_format($total_onboarding, 2); ?>
                                                </div>
                                            </div>
                                            <div class="col-md-8 d-flex justify-content-between">
                                                <div class="total-line">Total</div>
                                                <div class="total-value">
                                                    <p readonly id="paid">
                                                        <?php echo number_format($total_daily_paid + $total_onboarding, 2); ?>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="total-line balance no-wrap">Remaining on Rental</div>
                                                <div class="total-value balance text-right">
                                                    <p>Tzs. <?php echo number_format($rental_agreement_amount, 2); ?> -
                                                        [(Daily) + (Onboarding)]</p>
                                                    <div class="due">Tzs.
                                                        <?php echo number_format($remaining_on_rental, 2); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Signature Column -->
                                <div class="col-sm-6">
                                    <div class="container">
                                        <div class="form-group">
                                            <label for="signature">Signature</label>
                                            <textarea name="signature" class="form-control" rows="3"
                                                placeholder="Signature"></textarea>
                                        </div>
                                        <div class="form-group mt-3">
                                            <label for="rider_name">Rider Name</label>
                                            <input type="text" id="rider_name" readonly
                                                value="<?= htmlspecialchars($rider['name']) ?>"
                                                class="form-control border-bottom">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="footer-note mt-5">
                                <p>&copy; Rider 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 text-center text-md-end  my-5">
                <button type="button" class="btn btn-lg btn-primary" onclick="window.print();return false">
                    <i class="fa fa-print me-2"></i>Print Invoice
                </button>
            </div>
        </div>
    </div>
</body>

<script src="/assets/js/theme.js"></script>
<script src="/assets/js/bundle/dataTables.bundle.js"></script>

</html>