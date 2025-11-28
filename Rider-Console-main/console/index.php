<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
include $ROOT_DIR . '/utils/collections.php';

function formatPayment($amount, $status)
{
    $class = $status === 'completed' ? 'text-success' : 'text-danger';
    $prefix = $status === 'completed' ? '+' : '-';
    return "<strong class='$class'>$prefix Tzs." . number_format($amount, 2) . "</strong>";
}


// print_r($_SESSION);
$business_id = $_SESSION['business_id'];

if (!is_numeric($business_id)) {
    die("Invalid business ID.");
}

// Query for Total Revenue
$totalRevenueQuery = "SELECT SUM(p.amount_paid) AS total_revenue 
                      FROM payments p
                      JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                      WHERE p.payment_status = 'completed' AND ra.business_id = ?";

$stmt = $db->prepare($totalRevenueQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$totalRevenue = $stmt->get_result()->fetch_assoc()['total_revenue'] ?? 0;


// Active Rentals for specific business
$activeRentalsQuery = "SELECT COUNT(*) AS active_rentals FROM rental_agreements WHERE status = 'active' AND business_id = ?";
$stmt = $db->prepare($activeRentalsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$activeRentals = $stmt->get_result()->fetch_assoc()['active_rentals'] ?? 0;


// Available Vehicles for specific business
$availableVehiclesQuery = "SELECT COUNT(*) AS available_vehicles FROM vehicles WHERE status = 'available' AND business_id = ?";
$stmt = $db->prepare($availableVehiclesQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$availableVehicles = $stmt->get_result()->fetch_assoc()['available_vehicles'] ?? 0;


// Pending Payments for specific business
$pendingPaymentsQuery = "SELECT SUM(ra.total_amount_due) - COALESCE(SUM(p.amount_paid),0) AS pending_payments FROM rental_agreements ra 
                         LEFT JOIN payments p ON ra.rental_id = p.rental_id AND p.payment_status='completed'
                         WHERE ra.status = 'active' AND ra.business_id = ?";
$stmt = $db->prepare($pendingPaymentsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$pendingPayments = $stmt->get_result()->fetch_assoc()['pending_payments'] ?? 0;


// Format numbers for display
function formatCurrency($amount)
{
    return number_format($amount, 2, '.', ',');
}

// Last 7 payments for specific business
$lastPaymentsQuery = "SELECT p.payment_id, p.payment_date, p.amount_paid, p.payment_method, p.payment_status, 
                             ra.total_amount_due 
                      FROM payments p
                      JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                      WHERE ra.business_id = ?
                      ORDER BY p.payment_date DESC
                      LIMIT 12";

$stmt = $db->prepare($lastPaymentsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$lastPaymentsResult = $stmt->get_result();


// Last 7 rental agreements with remaining amount for specific business
$rentalAgreementsQuery = "
    SELECT 
        r.rider_id,
        r.name AS rider_name,
        r.phone AS rider_phone,
        ra.rental_id,
        ra.rental_start_date,
        ra.rental_end_date,
        ra.total_amount_due,
        v.daily_rental_fee,
        SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'onboarding' THEN p.amount_paid ELSE 0 END) AS total_paid_onboarding_fees,
        SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'daily' THEN p.amount_paid ELSE 0 END) AS total_paid_daily_rental_fees,
        TIMESTAMPDIFF(DAY, ra.rental_start_date, 
            CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) * v.daily_rental_fee AS total_expected_daily_rental_fees,
        SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type IN ('onboarding', 'daily') THEN p.amount_paid ELSE 0 END) AS total_paid_all_fees,
        TIMESTAMPDIFF(DAY, ra.rental_start_date, 
            CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) * v.daily_rental_fee - 
        SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'daily' THEN p.amount_paid ELSE 0 END) AS remaining_daily_payment,
        TIMESTAMPDIFF(DAY, ra.rental_start_date, 
            CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) AS days_elapsed
    FROM riders r
    JOIN rental_agreements ra ON r.rider_id = ra.rider_id
    JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
    LEFT JOIN payments p ON ra.rental_id = p.rental_id
    WHERE ra.business_id = ?
    GROUP BY r.rider_id, r.name, r.phone, ra.rental_id, ra.total_amount_due, v.daily_rental_fee, ra.rental_start_date, ra.rental_end_date, ra.status
    ORDER BY r.name, ra.rental_start_date DESC
";

$stmt = $db->prepare($rentalAgreementsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$rentalAgreementsResult = $stmt->get_result();
$result = $rentalAgreementsResult;

// Helper function for calculating remaining amount
function calculateRemaining($total_due, $total_paid)
{
    return max($total_due - $total_paid, 0);
}

// Fetch the data into an array for rendering
$rentalDetails = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['remaining_amount'] = calculateRemaining($row['total_amount_due'], $row['total_paid_all_fees']);
        $row['remaining_daily_payment'] = calculateRemaining($row['total_expected_daily_rental_fees'], $row['total_paid_daily_rental_fees']);
        $rentalDetails[] = $row;
    }
}

// Collected Today
$collectedTodayQuery = "SELECT SUM(p.amount_paid) AS collected_today FROM payments p 
                        JOIN rental_agreements ra ON p.rental_id = ra.rental_id 
                        WHERE DATE(p.payment_date) = CURDATE() AND p.payment_status = 'completed' AND ra.business_id = ?";
$stmt = $db->prepare($collectedTodayQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$collectedToday = $stmt->get_result()->fetch_assoc()['collected_today'] ?? 0;

// Expected Today
$expectedTodayQuery = "SELECT SUM(v.daily_rental_fee) AS expected_today FROM vehicles v 
                       JOIN rental_agreements ra ON v.vehicle_id = ra.vehicle_id 
                       WHERE ra.status = 'active' AND ra.business_id = ?";
$stmt = $db->prepare($expectedTodayQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$expectedToday = $stmt->get_result()->fetch_assoc()['expected_today'] ?? 0;

// Revenue This Week
$revenueThisWeekQuery = "SELECT SUM(p.amount_paid) AS revenue_this_week FROM payments p 
                         JOIN rental_agreements ra ON p.rental_id = ra.rental_id 
                         WHERE WEEK(p.payment_date) = WEEK(CURDATE()) AND p.payment_status = 'completed' AND ra.business_id = ?";
$stmt = $db->prepare($revenueThisWeekQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$revenueThisWeek = $stmt->get_result()->fetch_assoc()['revenue_this_week'] ?? 0;

// Revenue Last Week
$revenueLastWeekQuery = "SELECT SUM(p.amount_paid) AS revenue_last_week FROM payments p 
                         JOIN rental_agreements ra ON p.rental_id = ra.rental_id 
                         WHERE WEEK(p.payment_date) = WEEK(CURDATE()) - 1 AND p.payment_status = 'completed' AND ra.business_id = ?";
$stmt = $db->prepare($revenueLastWeekQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$revenueLastWeek = $stmt->get_result()->fetch_assoc()['revenue_last_week'] ?? 0;


// Payments Today
$paymentsTodayQuery = "SELECT SUM(p.amount_paid) AS payments_today FROM payments p
                       JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                       WHERE DATE(p.payment_date) = CURDATE() AND p.payment_status = 'completed' AND ra.business_id = ?";
$stmt = $db->prepare($paymentsTodayQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$paymentsToday = $stmt->get_result()->fetch_assoc()['payments_today'] ?? 0;

// Payments Yesterday
$paymentsYesterdayQuery = "SELECT SUM(p.amount_paid) AS payments_yesterday FROM payments p
                           JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                           WHERE DATE(p.payment_date) = CURDATE() - INTERVAL 1 DAY AND p.payment_status = 'completed' AND ra.business_id = ?";
$stmt = $db->prepare($paymentsYesterdayQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$paymentsYesterday = $stmt->get_result()->fetch_assoc()['payments_yesterday'] ?? 0;

// Rentals This Week
$rentalsThisWeekQuery = "SELECT COUNT(*) AS rentals_this_week FROM rental_agreements
                         WHERE WEEK(rental_start_date) = WEEK(CURDATE()) AND status = 'completed' AND business_id = ?";
$stmt = $db->prepare($rentalsThisWeekQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$rentalsThisWeek = $stmt->get_result()->fetch_assoc()['rentals_this_week'] ?? 0;

// Rentals Last Week
$rentalsLastWeekQuery = "SELECT COUNT(*) AS rentals_last_week FROM rental_agreements
                         WHERE WEEK(rental_start_date) = WEEK(CURDATE()) - 1 AND status = 'completed' AND business_id = ?";
$stmt = $db->prepare($rentalsLastWeekQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$rentalsLastWeek = $stmt->get_result()->fetch_assoc()['rentals_last_week'] ?? 0;


// Payments This Month
$paymentsThisMonthQuery = "SELECT SUM(p.amount_paid) AS payments_this_month FROM payments p
                           JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                           WHERE MONTH(p.payment_date) = MONTH(CURDATE())
                             AND YEAR(p.payment_date) = YEAR(CURDATE())
                             AND p.payment_status = 'completed'
                             AND ra.business_id = ?";
$stmt = $db->prepare($paymentsThisMonthQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$paymentsThisMonth = $stmt->get_result()->fetch_assoc()['payments_this_month'] ?? 0;

// Payments Last Month
$paymentsLastMonthQuery = "SELECT SUM(p.amount_paid) AS payments_last_month FROM payments p
                           JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                           WHERE MONTH(p.payment_date) = MONTH(CURDATE() - INTERVAL 1 MONTH)
                             AND YEAR(p.payment_date) = YEAR(CURDATE() - INTERVAL 1 MONTH)
                             AND p.payment_status = 'completed'
                             AND ra.business_id = ?";
$stmt = $db->prepare($paymentsLastMonthQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$paymentsLastMonth = $stmt->get_result()->fetch_assoc()['payments_last_month'] ?? 0;

// Pending Payments
$pendingPaymentsQuery = "SELECT 
    SUM(remaining_daily_payment) AS total_remaining_daily_payment
FROM (
    SELECT 
        r.rider_id,
        TIMESTAMPDIFF(DAY, ra.rental_start_date, 
            CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) * v.daily_rental_fee - 
        COALESCE(SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'daily' THEN p.amount_paid ELSE 0 END), 0) AS remaining_daily_payment
    FROM riders r
    JOIN rental_agreements ra ON r.rider_id = ra.rider_id
    JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
    LEFT JOIN payments p ON ra.rental_id = p.rental_id
    WHERE ra.business_id = ?
    GROUP BY r.rider_id, ra.rental_start_date, ra.rental_end_date, ra.status, v.daily_rental_fee
) AS remaining_payments";

$stmt = $db->prepare($pendingPaymentsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$pendingPayments = $stmt->get_result()->fetch_assoc()['total_remaining_daily_payment'] ?? 0;



// Queries for Daily Payments
$sql_daily = "SELECT DATE(p.payment_date) AS payment_date, SUM(p.amount_paid) AS total_daily_payment
              FROM payments p
              JOIN rental_agreements ra ON p.rental_id = ra.rental_id
              WHERE p.payment_status = 'completed' AND p.payment_type = 'daily' AND ra.business_id = ?
              GROUP BY DATE(p.payment_date)
              ORDER BY payment_date";
$stmt = $db->prepare($sql_daily);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$result_daily = $stmt->get_result();

// Queries for Onboarding Payments
$sql_onboarding = "SELECT DATE(p.payment_date) AS payment_date, SUM(p.amount_paid) AS total_onboarding_payment
                   FROM payments p
                   JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                   WHERE p.payment_status = 'completed' AND p.payment_type = 'onboarding' AND ra.business_id = ?
                   GROUP BY DATE(p.payment_date)
                   ORDER BY payment_date";
$stmt = $db->prepare($sql_onboarding);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$result_onboarding = $stmt->get_result();


// Prepare data for amCharts
$data_daily = [];
$data_onboarding = [];

while ($row = $result_daily->fetch_assoc()) {
    $data_daily[] = [
        'date' => strtotime($row['payment_date']) * 1000,
        'value' => (float) $row['total_daily_payment']
    ];
}

while ($row = $result_onboarding->fetch_assoc()) {
    $data_onboarding[] = [
        'date' => strtotime($row['payment_date']) * 1000,
        'value' => (float) $row['total_onboarding_payment']
    ];
}

// Pass data to JavaScript
$data_daily_json = json_encode($data_daily);
$data_onboarding_json = json_encode($data_onboarding);



// Get the current date, the start of this week and last week (SQL will handle these)
$currentDate = date('Y-m-d');
$startOfWeek = date('Y-m-d', strtotime('monday this week'));
$startOfLastWeek = date('Y-m-d', strtotime('monday last week'));
$endOfLastWeek = date('Y-m-d', strtotime('sunday last week'));


// Single query to get total expenses, expenses this week, and expenses last week
$query = "
    SELECT 
        SUM(amount) AS total_expenses,
        SUM(CASE WHEN expense_date BETWEEN ? AND ? THEN amount ELSE 0 END) AS expenses_this_week,
        SUM(CASE WHEN expense_date BETWEEN ? AND ? THEN amount ELSE 0 END) AS expenses_last_week
    FROM expenses
    WHERE business_id = ?";

$stmt = $db->prepare($query);
$stmt->bind_param("ssssi", $startOfWeek, $currentDate, $startOfLastWeek, $endOfLastWeek, $business_id);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();


// Assign values or default to 0
$totalExpenses = $data['total_expenses'] ?? 0;
$expensesThisWeek = $data['expenses_this_week'] ?? 0;
$expensesLastWeek = $data['expenses_last_week'] ?? 0;


if ($totalRevenue > 0) {
    $totalRevenue = $totalRevenue - $totalExpenses;
    $totalManagementFee = $totalRevenue * 0.1; // 10% management fee after exenses
} else {
    $totalManagementFee = 0;
}

// total collections
$totalCollections = Collections::getTotalCollectedByAllAdmins($business_id);
$remainingCollections = $totalManagementFee - $totalCollections;

// Query for Total Number of Transactions
$totalTransactionsQuery = "SELECT COUNT(*) AS total_transactions FROM payments p
                        JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                        WHERE ra.business_id = ?";
$stmt = $db->prepare($totalTransactionsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$totalTransactions = $stmt->get_result()->fetch_assoc()['total_transactions'] ?? 0;

// Query for Total Number of Collections
$totalCollectionsQuery = "SELECT COUNT(*) AS total_collections FROM collections WHERE business_id = ?";
$stmt = $db->prepare($totalCollectionsQuery);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$totalCollections = $stmt->get_result()->fetch_assoc()['total_collections'] ?? 0;

?>


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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Welcome back, <?= $FULL_NAME ?></h1>
                        <small class="text-muted">Subscribed to channel: <?= $BUSINESS_NAME; ?>.</small>
                    </div>
                    <div class="col d-flex justify-content-lg-end mt-2 mt-md-0">
                        <div class="p-2 me-md-3">
                            <div><span class="h6 mb-0"><?= number_format($totalTransactions); ?></span> </div>
                            <small class="text-muted text-uppercase">Transactions</small>
                        </div>
                        <div class="p-2 me-md-3">
                            <div><span class="h6 mb-0"><?= number_format($totalCollections); ?></span></div>
                            <small class="text-muted text-uppercase">Collections</small>
                        </div>
                    </div>
                </div> <!-- .row end -->

                <div class="row g-3 row-deck">
                    <!-- Total Revenue -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <i class="fa fa-dollar-sign position-absolute top-0 end-0 mt-4 me-3 text-muted"
                                    style="font-size: 26px;"></i>
                                <div class="mb-2 text-uppercase">Total Revenue</div>
                                <div><span class="h4">Tzs. <?= formatCurrency($totalRevenue); ?></span></div>
                                <small class="text-muted">All-time revenue collected (after expenses)</small>
                            </div>
                        </div>
                    </div>

                    <!-- Active Rentals -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <i class="fa fa-motorcycle position-absolute top-0 end-0 mt-4 me-3 text-muted"
                                    style="font-size: 26px;"></i>
                                <div class="mb-2 text-uppercase">Active Rentals</div>
                                <div><span class="h4"><?= $activeRentals; ?></span></div>
                                <small class="text-muted">Currently active agreements</small>
                            </div>
                        </div>
                    </div>

                    <!-- Available Vehicles -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <i class="fa fa-bicycle position-absolute top-0 end-0 mt-4 me-3 text-muted"
                                    style="font-size: 26px;"></i>
                                <div class="mb-2 text-uppercase">Available Vehicles</div>
                                <div><span class="h4"><?= $availableVehicles; ?></span></div>
                                <small class="text-muted">Ready for rental</small>
                            </div>
                        </div>
                    </div>

                    <!-- Pending Payments -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <i class="fa fa-credit-card position-absolute top-0 end-0 mt-4 me-3 text-muted"
                                    style="font-size: 26px;"></i>
                                <div class="mb-2 text-uppercase">Pending Payments</div>
                                <div><span class="h4">
                                        Tzs. <?= formatCurrency($pendingPayments); ?>
                                    </span></div>
                                <small class="text-muted">Total pending collections</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="row row-cols-xxl-5 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-xl-3 g-2 mb-3 mt-3">
                    <!-- Collected vs Expected -->
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="fw-bold">
                                    <span
                                        class="h4 mb-0"><?php echo 'Tzs. ' . number_format($collectedToday, 2); ?></span>
                                    <span
                                        class="<?php echo ($collectedToday >= $expectedToday) ? 'text-success' : 'text-danger'; ?> ms-1">
                                        <?php
                                        if ($expectedToday != 0) {
                                            $growth = (($collectedToday - $expectedToday) / $expectedToday) * 100;
                                            echo round($growth, 2) . '%';
                                        } else {
                                            echo 'N/A';
                                        }
                                        ?>
                                        <i
                                            class="fa <?php echo ($collectedToday >= $expectedToday) ? 'fa-caret-up' : 'fa-caret-down'; ?>"></i>
                                    </span>
                                </div>
                                <div class="text-muted small">
                                    Yesterday
                                    <span
                                        class="fw-bold"><?php echo 'Tzs. ' . number_format($paymentsYesterday, 2); ?></span>
                                </div>
                                <div class="mt-3">
                                    <label class="small d-flex justify-content-between">
                                        Expected Today
                                        <span
                                            class="fw-bold"><?php echo 'Tzs. ' . number_format($expectedToday, 2); ?></span>
                                    </label>
                                    <div class="progress mt-1" style="height: 6px;">
                                        <div class="progress-bar bg-primary" role="progressbar"
                                            aria-valuenow="<?php echo $expectedToday != 0 ? ($collectedToday / $expectedToday) * 100 : 0; ?>"
                                            aria-valuemin="0" aria-valuemax="100"
                                            style="width: <?php echo $expectedToday != 0 ? ($collectedToday / $expectedToday) * 100 : 0; ?>%;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Revenue Collection -->
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="fw-bold">
                                    <span
                                        class="h4 mb-0"><?php echo 'Tzs. ' . number_format($revenueThisWeek, 2); ?></span>
                                    <span
                                        class="<?php echo ($revenueThisWeek >= $revenueLastWeek) ? 'text-success' : 'text-danger'; ?> ms-1">
                                        <?php
                                        if ($revenueLastWeek != 0) {
                                            $growth = (($revenueThisWeek - $revenueLastWeek) / $revenueLastWeek) * 100;
                                            echo round($growth, 2) . '%';
                                        } else {
                                            echo 'N/A';
                                        }
                                        ?>
                                        <i
                                            class="fa <?php echo ($revenueThisWeek >= $revenueLastWeek) ? 'fa-caret-up' : 'fa-caret-down'; ?>"></i>
                                    </span>
                                </div>
                                <div class="text-muted small">Revenue This Week</div>
                                <div class="mt-3">
                                    <label class="small d-flex justify-content-between">
                                        Last Week
                                        <span
                                            class="fw-bold"><?php echo 'Tzs. ' . number_format($revenueLastWeek, 2); ?></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Payments This Month vs Last Month -->
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="fw-bold">
                                    <span
                                        class="h4 mb-0"><?php echo 'Tzs. ' . number_format($paymentsThisMonth, 2); ?></span>
                                    <span
                                        class="<?php echo ($paymentsThisMonth >= $paymentsLastMonth) ? 'text-success' : 'text-danger'; ?> ms-1">
                                        <?php
                                        if ($paymentsLastMonth != 0) {
                                            $growthMonth = (($paymentsThisMonth - $paymentsLastMonth) / $paymentsLastMonth) * 100;
                                            echo round($growthMonth, 2) . '%';
                                        } else {
                                            echo 'N/A';
                                        }
                                        ?>
                                        <i
                                            class="fa <?php echo ($paymentsThisMonth >= $paymentsLastMonth) ? 'fa-caret-up' : 'fa-caret-down'; ?>"></i>
                                    </span>
                                </div>
                                <div class="text-muted small">Payments This Month</div>
                                <div class="mt-3">
                                    <label class="small d-flex justify-content-between">
                                        Last Month
                                        <span
                                            class="fw-bold"><?php echo 'Tzs. ' . number_format($paymentsLastMonth, 2); ?></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Rentals This Week vs Last Week -->
                    <div class="col d-none">
                        <div class="card">
                            <div class="card-body">
                                <div class="fw-bold">
                                    <span class="h4 mb-0"><?php echo $rentalsThisWeek; ?></span>
                                    <span
                                        class="<?php echo ($rentalsThisWeek >= $rentalsLastWeek) ? 'text-success' : 'text-danger'; ?> ms-1">
                                        <?php
                                        if ($rentalsLastWeek != 0) {
                                            $growth = (($rentalsThisWeek - $rentalsLastWeek) / $rentalsLastWeek) * 100;
                                            echo round($growth, 2) . '%';
                                        } else {
                                            echo 'N/A';
                                        }
                                        ?>
                                        <i
                                            class="fa <?php echo ($rentalsThisWeek >= $rentalsLastWeek) ? 'fa-caret-up' : 'fa-caret-down'; ?>"></i>
                                    </span>
                                </div>
                                <div class="text-muted small">Rentals This Week</div>
                                <div class="mt-3">
                                    <label class="small d-flex justify-content-between">
                                        Last Week
                                        <span class="fw-bold"><?php echo $rentalsLastWeek; ?></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Expenses This Week vs Last Week (Single Column) -->
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <!-- Total Expenses -->
                                <div class="fw-bold">
                                    <span class="h4 mb-0"><?php echo number_format($totalExpenses, 2); ?></span>
                                </div>
                                <div class="text-muted small">Total Expenses</div>

                                <div class="row mt-3">
                                    <!-- Expenses This Week -->
                                    <div class="col-12">
                                        <label class="small d-flex justify-content-between">
                                            This Week <br>
                                            <span class="fw-bold">Tzs.
                                                <?php echo number_format($expensesThisWeek, 2); ?></span>
                                        </label>
                                    </div>

                                    <!-- Expenses Last Week -->
                                    <div class="col-12">
                                        <label class="small d-flex justify-content-between">
                                            Last Week <br>
                                            <span class="fw-bold">Tzs.
                                                <?php echo number_format($expensesLastWeek, 2); ?></span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Management Fee -->
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <!-- Total Management Fee Generated -->
                                <div class="fw-bold">
                                    <span class="h4 mb-0"><?php echo number_format($totalManagementFee, 2); ?></span>
                                </div>
                                <div class="text-muted small">Total Generated (10% of revenue)</div>

                                <div class="row mt-3">
                                    <!-- Total Collected -->
                                    <div class="col-12">
                                        <label class="small d-flex justify-content-between">
                                            Collected: <br>
                                            <span class="fw-bold">Tzs.
                                                <?php echo number_format($totalCollections, 2); ?> </span>
                                        </label>
                                    </div>

                                    <!-- Remaining after collection -->
                                    <div class="col-12">
                                        <label class="small d-flex justify-content-between">
                                            Remaining <br>
                                            <span class="fw-bold">Tzs.
                                                <?php echo number_format($remainingCollections, 2); ?></span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row g-3 mt-3 row-deck">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div id="chartdiv" style="width: 100%; height: 400px;"></div>
                            </div>
                        </div>
                    </div>


                    <div class="col-xxl-6 col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title mb-0">Transactions</h6>
                                <a href="/console/transactions/" title="">View All</a>
                            </div>
                            <ul class="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                <?php while ($payment = $lastPaymentsResult->fetch_assoc()): ?>
                                    <li class="list-group-item d-flex align-items-center py-3">
                                        <div class="flex-fill ms-3">
                                            <div class="h6 mb-0"><?= ucfirst($payment['payment_method']); ?></div>
                                            <small class="text-muted">
                                                <?= date('F d, Y \a\t h:i A', strtotime($payment['payment_date'])); ?>
                                            </small>
                                        </div>
                                        <div class="flex-end" style="min-width: 120px;">
                                            <?= formatPayment($payment['amount_paid'], $payment['payment_status']); ?>
                                            <br>
                                            <span><?= ucfirst($payment['payment_status']); ?></span>
                                        </div>
                                    </li>
                                <?php endwhile; ?>
                            </ul>
                        </div>

                    </div>

                    <div class="col-xxl-6 col-lg-8">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title m-0">Rental Agreements [Preview]</h6>
                                <div class="dropdown morphing scale-left">
                                    <a href="#" class="card-fullscreen" data-bs-toggle="tooltip"
                                        aria-label="Card Full-Screen" data-bs-original-title="Card Full-Screen">
                                        <i class="icon-size-fullscreen"></i>
                                    </a>
                                    <a href="#" class="more-icon dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </a>
                                    <ul class="dropdown-menu shadow border-0 p-2">
                                        <li><a class="dropdown-item" href="/console/riders/payments.php">View Rider
                                                Payments</a></li>
                                        <li><a class="dropdown-item" href="/console/rentals/">Rider Details</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-lg table-nowrap card-table mb-0">
                                    <tbody>
                                        <?php if (!empty($rentalDetails)): ?>
                                            <?php foreach ($rentalDetails as $rental): ?>
                                                <tr>
                                                    <td>
                                                        <h6 class="mb-0">Rental #<?= $rental['rental_id']; ?></h6>
                                                        <span class="font-12 text-muted">

                                                            Days Elapsed: <?= $rental['days_elapsed']; ?> <br>
                                                            End: <?= $rental['rental_end_date']
                                                                ? date('d M Y', strtotime($rental['rental_end_date']))
                                                                : 'Ongoing'; ?>
                                                        </span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <small class="text-muted">
                                                            Total Due: Tzs.
                                                            <?= number_format($rental['total_amount_due'], 2); ?><br>
                                                            Remaining: Tzs.
                                                            <?= number_format($rental['remaining_amount'], 2); ?>
                                                        </small>
                                                    </td>
                                                    <td class="align-middle">
                                                        <small class="text-muted">
                                                            Expected Daily: Tzs.
                                                            <?= number_format($rental['total_expected_daily_rental_fees'], 2); ?><br>
                                                            Remaining Daily: Tzs.
                                                            <?= number_format($rental['remaining_daily_payment'], 2); ?>
                                                        </small>
                                                    </td>
                                                </tr>
                                            <?php endforeach; ?>
                                        <?php else: ?>
                                            <tr>
                                                <td colspan="4" class="text-center">No recent rental agreements found.</td>
                                            </tr>
                                        <?php endif; ?>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    </div>


    <script src="/assets/js/theme.js"></script>

    <!-- Resources -->
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>

    <script>
        var dataDaily = <?php echo $data_daily_json; ?>;
        var dataOnboarding = <?php echo $data_onboarding_json; ?>;

        document.addEventListener("DOMContentLoaded", function () {
            am5.ready(function () {

                // Create root element
                var root = am5.Root.new("chartdiv");

                // Set themes
                root.setThemes([
                    am5themes_Animated.new(root)
                ]);

                // Create chart
                var chart = root.container.children.push(
                    am5xy.XYChart.new(root, {
                        panX: true,
                        panY: true,
                        wheelX: "panX",
                        wheelY: "zoomX",
                        pinchZoomX: true
                    })
                );

                // Create axes
                var xAxis = chart.xAxes.push(
                    am5xy.DateAxis.new(root, {
                        baseInterval: { timeUnit: "day", count: 1 },
                        renderer: am5xy.AxisRendererX.new(root, {}),
                        tooltip: am5.Tooltip.new(root, {})
                    })
                );

                var yAxis = chart.yAxes.push(
                    am5xy.ValueAxis.new(root, {
                        renderer: am5xy.AxisRendererY.new(root, {})
                    })
                );

                // Create a function to add series
                function addSeries(name, data, color) {
                    var series = chart.series.push(
                        am5xy.LineSeries.new(root, {
                            name: name,
                            xAxis: xAxis,
                            yAxis: yAxis,
                            valueYField: "value",
                            valueXField: "date",
                            tooltip: am5.Tooltip.new(root, {
                                labelText: "{name}: {valueY}"
                            })
                        })
                    );

                    series.strokes.template.setAll({
                        strokeWidth: 2,
                        stroke: am5.color(color)
                    });

                    series.data.setAll(data);

                    series.bullets.push(function () {
                        return am5.Bullet.new(root, {
                            sprite: am5.Circle.new(root, {
                                radius: 4,
                                fill: series.get("fill")
                            })
                        });
                    });

                    // Animate series appearance
                    series.appear(1000);
                    return series;
                }

                // Add data series for daily and onboarding payments
                addSeries("Daily Payments", dataDaily, "#FF5733"); // Use a distinct color for each series
                addSeries("Onboarding Payments", dataOnboarding, "#33C4FF");

                // Add a legend
                var legend = chart.children.push(am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50
                }));
                legend.data.setAll(chart.series.values);

                // Add cursor
                chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "zoomX"
                }));

                // Add scrollbar
                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                // Animate chart appearance
                chart.appear(1000, 100);

            }); // end am5.ready()
        });
    </script>

</body>

</html>