<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
require_once $ROOT_DIR . '/utils/riders.php';
require_once $ROOT_DIR . '/utils/payments.php';

$business_id = $BUSINESS_ID;

// Get rider ID from request
$rider_id = $_GET['id'];

// Redirect if no rider ID provided
if (!$rider_id) {
    header('Location: /riders.php');
    exit();
}

// Fetch rider details
$rider = Riders::fetchRider($rider_id, $business_id);

// Weekly payment details (for daily payments)
$payment_details_daily = Payments::getWeeklyPaymentDetailsDaily($rider_id, $business_id);

// Onboarding payment details
$payment_details_onboarding = Payments::getWeeklyPaymentDetailsOnboarding($rider_id, $business_id);

// Total amounts (weekly and onboarding)
$totals = Payments::getTotalAmounts($rider_id, $business_id);
$total_weekly_paid = $totals['total_weekly_paid'];
$total_onboarding = $totals['total_onboarding'];


$total_daily_paid = Payments::fetchRiderTotalDailyPaid($rider_id, $business_id);
$total_onboarding = Payments::fetchRiderTotalOnboarding($rider_id, $business_id);

?>

<style>
    .no-wrap {
        white-space: nowrap;
    }
</style>

<link rel="stylesheet" href="/assets/cssbundle/dataTables.min.css">

<body class="layout-1" data-luno="theme-blue">
    <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

    <div class="wrapper">
        <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div class="container-fluid">
                <div class="row g-3">
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

                    <!-- Daily Payments Table -->
                    <div class="col-12 print_invoice">
                        <div class="card">
                            <div class="card-header border-bottom fs-4">
                                <h5 class="card-title mb-0">Rider Payment Logs</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <!-- Rider Details -->
                                        <div class="mb-4">
                                            <p class="form-control address">
                                                <?php echo $rider['name']; ?>, <br>
                                                <?php echo $rider['address']; ?> <br> Phone:
                                                <?php echo $rider['phone']; ?>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <!-- Weekly Transaction List -->
                                        <div class="customer">
                                            <h6 class="customer-title">Weekly Transaction List</h6>
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
                                </div>

                                <!-- Weekly Payments Table -->
                                <h6 class="mb-3 mt-3">Rider daily Payment Logs</h6>
                                </table>
                                <table class="table items no-wrap">
                                    <thead>
                                        <tr>
                                            <th>Week Range</th>
                                            <th>Weekly Paid</th>
                                            <th>Expected Weekly Payment</th>
                                            <th>Weekly Balance Due</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($payment_details_daily as $payment): ?>
                                            <tr>
                                                <td><?php echo $payment['week_range']; ?></td>
                                                <td><?php echo number_format($payment['total_weekly_paid'], 2); ?></td>
                                                <td><?php echo number_format($payment['expected_weekly_income'], 2); ?></td>
                                                <td><?php
                                                if ($payment['weekly_balance_due'] == 0) {
                                                    echo "<span class='text-success'>" . number_format($payment['weekly_balance_due'], 2) . "</span>";
                                                } else if($payment['weekly_balance_due'] < 0) {
                                                    echo "<span class='text-primary'> Excess: +" . number_format(-$payment['weekly_balance_due'], 2) . "</span>";
                                                }
                                                else {
                                                    echo "<span class='text-danger'>" . number_format($payment['weekly_balance_due'], 2) . "</span>";
                                                } ?></td>
                                            </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>

                                <!-- Onboarding Payment Logs -->
                                <div class="mt-5">
                                    <h6 class="mb-3 mt-3">Rider Onboarding Payment Logs</h6>
                                    <table class="table items no-wrap">
                                        <thead>
                                            <tr>
                                                <th>Week Range</th>
                                                <th>Onboarding Paid</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($payment_details_onboarding as $payment): ?>
                                                <tr>
                                                    <td><?php echo $payment['week_range']; ?></td>
                                                    <td><?php echo number_format($payment['total_onboarding_paid'], 2); ?>
                                                    </td>
                                                </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Payment Summary -->
                                <div class="mt-4">
                                    <div class="row">
                                        <!-- Left Column: Totals -->
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="total-line">Total Daily Paid</div>
                                                        <div class="total-value">
                                                            <?php echo number_format($total_daily_paid, 2); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="total-line">Total Onboarding</div>
                                                        <div class="total-value">
                                                            <?php echo number_format($total_onboarding, 2); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="total-line balance">Total</div>
                                                        <div class="total-value">
                                                            <?php echo number_format($total_daily_paid + $total_onboarding, 2); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Right Column: Signature -->
                                        <div class="col-sm-6">
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
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <!-- Print Button -->
                        <div class="text-center text-md-end mt-4">
                            <button type="button" class="btn btn-lg btn-primary" onclick="window.print();return false;">
                                <i class="fa fa-print me-2"></i>Print Invoice
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <script src="/assets/js/theme.js"></script>
            <script src="/assets/js/bundle/dataTables.bundle.js"></script>
</body>

</html>