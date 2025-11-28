<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
require_once $ROOT_DIR . '/utils/riders.php';
require_once $ROOT_DIR . '/utils/payments.php';
require_once $ROOT_DIR . '/utils/rentals.php';

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

// Get rental details
$rental_details = Rentals::getRiderRentalDetails($rider_id);

// Fetch full payment records
$payment_details = Payments::getPreviousNonPaidDates($rider_id, 'ASC', $business_id);
$total_daily_paid = Payments::fetchRiderTotalDailyPaid($rider_id, $business_id);
$total_onboarding = Payments::fetchRiderTotalOnboarding($rider_id, $business_id);
$balance_due = Payments::fetchRiderBalanceDue($rider_id, $business_id);
$rental_agreement_amount = Payments::fetchRiderRentalAgreementAmount($rider_id, $business_id);

// Calculate remaining balance on rental
$remaining_on_rental = $rental_agreement_amount - ($total_daily_paid + $total_onboarding);
?>

<!-- Add the appropriate CSS for the table -->
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
                                    <h6 class="customer-title">Pending Daily Payments</h6>
                                    <table class="meta mb-3">
                                        <tbody>
                                            <tr>
                                                <td class="meta-head">Rider #</td>
                                                <td>Rider: <?php echo $rider['rider_id']; ?></td>
                                            </tr>
                                            <tr>
                                                <td class="meta-head">Start Date:</td>
                                                <td colspan="2"><?php echo $rental_details['rental_start_date']; ?></td>
                                            <tr>
                                                <td class="meta-head">Generated:</td>
                                                <td colspan="2"><?php echo date('F j, Y'); ?></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div class="row mt-5">
                                <!-- Rider Payment Logs Table -->
                                <div class="col-12 mt-3">
                                    <h6 class="mb-3">Due Payments</h6>
                                    <table class="table items no-wrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Payment Date</th>
                                                <th scope="col">Daily Rental Fee</th>
                                                <th scope="col">Amount Paid</th>
                                                <th scope="col">Reminder</th>
                                                <th scope="col">Cumulative Due Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            $cumulative_due = 0; // Initialize cumulative due amount
                                            foreach ($payment_details as $payment):
                                                $cumulative_due += $payment['reminder']; // Add the unpaid reminder amount to the cumulative total
                                                ?>
                                                <tr class="item-row">
                                                    <td class="item-name">
                                                        <p><?php echo date('F j, Y', strtotime($payment['payment_date'])); ?>
                                                        </p>
                                                    </td>
                                                    <td><?php echo number_format($payment['daily_rental_fee'], 2); ?></td>
                                                    <td>
                                                        <?php if ($payment['amount_paid'] == 0): ?>
                                                            <span style="color: red;">not paid</span>
                                                        <?php else: ?>
                                                            <?php echo number_format($payment['amount_paid'], 2); ?>
                                                        <?php endif; ?>
                                                    </td>
                                                    <td>
                                                        <?php echo number_format($payment['reminder'], 2); ?>
                                                    </td>
                                                    <td><?php echo number_format($cumulative_due, 2); ?></td>
                                                </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>



                                <!-- Payment Summary -->
                                <div class="col-sm-6 mt-5">
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
                                                <div class="total-line balance text-warning no-wrap">Remaining on Rental
                                                </div>
                                                <div class="total-value balance text-right">
                                                    <p>Tzs. <?php echo number_format($rental_agreement_amount, 2); ?> -
                                                        [(Daily) + (Onboarding)]</p>
                                                    <div class="">Tzs.
                                                        <?php echo number_format($remaining_on_rental, 2); ?>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-8 mt-3 text-danger d-flex justify-content-between">
                                                <div class="total-line">Pending Daily On Payments</div>
                                                <div class="total-value due">
                                                    <p readonly id="paid">
                                                        Tzs. <?php echo number_format($cumulative_due, 2); ?>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Signature Column -->
                                <div class="col-sm-6 mt-5">
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

            <div class="col-12 text-center text-md-end my-5">
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