<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
require_once $ROOT_DIR . '/utils/payments.php';
require_once $ROOT_DIR . '/utils/rentals.php';

$business_id = $BUSINESS_ID;

$rental_id = $payment_date = $amount_paid = $payment_method = $payment_status = "";
$success_message = $error_message = "";

// Check if form is submitted for Update
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    // Initialize error message
    $error_message = null;
    $success_message = null;

    // Sanitize and validate input
    $payment_id = filter_input(INPUT_POST, 'payment_id', FILTER_VALIDATE_INT);
    $reference = filter_input(INPUT_POST, 'reference', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $rental_id = filter_input(INPUT_POST, 'rental_id', FILTER_VALIDATE_INT);
    $amount_paid = filter_input(INPUT_POST, 'amount_paid', FILTER_VALIDATE_FLOAT);
    $payment_date = filter_input(INPUT_POST, 'payment_date', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $excess_amount = filter_input(INPUT_POST, 'excess_amount', FILTER_VALIDATE_FLOAT);
    $target_payment_date = filter_input(INPUT_POST, 'target_payment_date', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $amount_missing = filter_input(INPUT_POST, 'amount_missing', FILTER_VALIDATE_FLOAT);
    $target_amount_paid = filter_input(INPUT_POST, 'amount_paid', FILTER_VALIDATE_FLOAT);

    if ($excess_amount < 0 || $amount_missing < 0 || $target_amount_paid < 0) {
        $error_message = 'Error: Invalid amount entered. Please try again.';
        return;
    }

    // amount to move
    $movable_amount = $excess_amount - $amount_missing;
    $amount_to_move = 0;

    if ($movable_amount < 0) {
        $amount_to_move = $excess_amount;
    } else {
        $amount_to_move = $amount_missing;
    }

    // create payment for the target date
    $target_payment_date = date('Y-m-d H:i:s', strtotime($target_payment_date . ' ' . date('H:i:s')));
    $random_string = substr(bin2hex(random_bytes(8)), 0, 25);
    $auto_reference = $reference . "-" . $random_string;
    $auto_reference = substr($auto_reference, 0, 20);
    $payment_type = "daily";

    $result = Payments::updatePaymentDate(
        $payment_id,
        $target_payment_date,
        $payment_date,
    );

    // Handle database operation result
    if (strpos($result, 'Error') === false) {
        $success_message = '✅ Payment record updated successfully.';

        // Prepare and send notification email to support
        $mail_to = "support@flit.tz";
        $mail_subject = "Payment Update Notification — Payment ID: $payment_id";

        $mail_body = <<<EOD
Dear Support Team,

A payment record has been successfully updated and moved to a new date.

Payment Update Details
- Payment ID: $payment_id
- Rental ID: $rental_id
- From Date: $payment_date
- To Date: $target_payment_date
- Updated By: {$_SESSION['username']}
- Timestamp: {date('Y-m-d H:i:s')}

This update was performed through the admin console.

Kind regards,  
System Notification Bot
EOD;

        $mails_to_cc = ["edgar@flit.tz"];
        send_mail($mail_to, $mail_subject, $mail_body, $mails_to_cc);

    } else {
        $error_message = 'Failed to update payment record. Please try again or contact support if the issue persists.';
    }
}


// Fetch payment details if updating
if (isset($_GET['payment_id']) && !empty($_GET['payment_id'])) {
    $payment_id = $_GET['payment_id'];
    $result = $db->query("SELECT * FROM payments WHERE payment_id = $payment_id");

    if ($result->num_rows > 0) {
        $payment = $result->fetch_assoc();
        $rental_id = $payment['rental_id'];
        $amount_paid = $payment['amount_paid'];
        $payment_method = $payment['payment_method'];
        $payment_status = $payment['payment_status'];
        $payment_date = $payment['payment_date'];
        $payment_type = $payment['payment_type'];
        $reference = $payment['reference'];

        $rental_details = Rentals::getRentalDetails($rental_id);
        $rider_id = $rental_details['rider_id'];
        $daily_rental_fee = $rental_details['daily_rental_fee'];

        // Non Paid Dates
        $non_paid_dates = Payments::getPreviousNonPaidDates($rider_id, 'ASC', $business_id);
    } else {
        $error_message = 'Error: Payment record not found.';
    }
}
?>

<body class="layout-1" data-luno="theme-blue">
    <!-- start: sidebar -->
    <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

    <!-- start: body area -->
    <div class="wrapper">
        <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

        <!-- start: page body -->
        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div class="container">

                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col text-start">
                                        <a href="/console/transactions/" class="btn btn-primary">
                                            <i class="fas fa-arrow-left"></i> Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-header">
                                <h6 class="card-title mb-0">Working with Payment. REF:
                                    <?php echo htmlspecialchars($reference ?? "This payment might've been updated. please revise it"); ?>
                                </h6>
                                <p class="mt-3 alert show alert-info" style="opacity:1">⚠️ Please be careful with amount
                                    transfer, Records updated here will be emailed to support account for recon.</p>
                            </div>
                            <form method="post">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success text-success" <?php if (!empty($success_message)): ?> style="opacity: 1" <?php endif; ?>>
                                            <?php echo htmlspecialchars($success_message); ?>, Please wait for page
                                            redirect
                                        </div>
                                        <script type="text/javascript">
                                            setTimeout(function () {
                                                window.location.href = '/console/transactions/rider-daily.php?id=<?= $rider_id ?>';
                                            }, 1500);
                                        </script>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger" <?php if (!empty($error_message)): ?>
                                                style="opacity: 1" <?php endif; ?>>
                                            <?php echo htmlspecialchars($error_message); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="row g-3">
                                        <!-- Rental Agreement Selection -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rental Agreement *</label>
                                            <select name="rental_id" class="form-control form-control-lg" required
                                                readonly disabled>
                                                <option value="">Select Rental Agreement</option>
                                                <?php
                                                // Query to fetch active rental agreements
                                                $rental_result = $db->query("SELECT ra.rental_id, r.name AS rider_name, m.registration_no 
                                                                             FROM rental_agreements ra
                                                                             JOIN riders r ON ra.rider_id = r.rider_id
                                                                             JOIN vehicles m ON ra.vehicle_id = m.vehicle_id
                                                                             WHERE ra.status = 'active' and ra.business_id = $business_id");
                                                while ($rental = $rental_result->fetch_assoc()) {
                                                    echo "<option value='" . $rental['rental_id'] . "' " . ($rental_id == $rental['rental_id'] ? 'selected' : '') . ">"
                                                        . htmlspecialchars($rental['rider_name']) . " - " . htmlspecialchars($rental['registration_no'])
                                                        . "</option>";
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Amount Paid -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Amount Paid *</label>
                                            <input type="number" name="amount_paid" class="form-control form-control-lg"
                                                required value="<?php echo htmlspecialchars($amount_paid); ?>"
                                                step="0.01" readonly disabled>
                                        </div>

                                        <!-- Payment Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Payment Date
                                                (<?php echo htmlspecialchars($payment_date); ?>)</label>
                                            <input type="date" name="_payment_date" class="form-control form-control-lg"
                                                value="<?php echo htmlspecialchars(date('Y-m-d', strtotime($payment_date))); ?>"
                                                required readonly disabled>
                                            <input type="hidden" name="payment_date"
                                                value="<?php echo htmlspecialchars($payment_date); ?>">
                                        </div>
                                    </div>


                                    <!-- Excess Info -->
                                    <div class="row g-3">
                                        <hr class="my-5">

                                        <!-- Target Payment Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Transfer Payment to this payment date</label>
                                            <select id="target_payment_date" name="target_payment_date"
                                                class="form-control form-control-lg" required>
                                                <option value="">Select a Date</option>
                                                <?php foreach ($non_paid_dates as $date): ?>
                                                    <option value="<?php echo htmlspecialchars($date['payment_date']); ?>"
                                                        data-daily-fee="<?php echo htmlspecialchars($date['daily_rental_fee']); ?>"
                                                        data-amount-paid="<?php echo htmlspecialchars($date['amount_paid']); ?>"
                                                        data-reminder="<?php echo htmlspecialchars($date['reminder']); ?>">
                                                        <?php echo htmlspecialchars($date['payment_date']); ?>
                                                    </option>
                                                <?php endforeach; ?>
                                            </select>
                                            <input type="hidden" name="reference"
                                                value="<?php echo htmlspecialchars($reference); ?>">
                                        </div>

                                        <!-- Amount Missing that day -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Missing that day</label>
                                            <input type="number" id="amount_missing" name="amount_missing"
                                                class="form-control form-control-lg" required step="0.01" readonly>
                                            <input type="hidden" name="excess_amount"
                                                value="<?php echo htmlspecialchars($excess); ?>">
                                        </div>

                                        <!-- Amount Paid that day -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Amount Paid that day</label>
                                            <input type="number" id="amount_paid" name="amount_paid"
                                                class="form-control form-control-lg" required step="0.01" readonly>
                                        </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between">
                                        <input type="hidden" name="payment_id"
                                            value="<?php echo htmlspecialchars($payment_id); ?>">
                                        <input type="hidden" name="rental_id"
                                            value="<?php echo htmlspecialchars($rental_id); ?>">
                                        <button type="submit" name="update" class="btn btn-success">Move
                                            Transaction</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <script src="/assets/js/theme.js"></script>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const targetDateSelect = document.getElementById("target_payment_date");
            const amountMissingInput = document.getElementById("amount_missing");
            const amountPaidInput = document.getElementById("amount_paid");

            targetDateSelect.addEventListener("change", function () {
                const selectedOption = targetDateSelect.options[targetDateSelect.selectedIndex];

                // Get data attributes from the selected option
                const reminder = selectedOption.getAttribute("data-reminder");
                const amountPaid = selectedOption.getAttribute("data-amount-paid");

                // Update the input fields
                amountMissingInput.value = reminder ? parseFloat(reminder).toFixed(2) : 0;
                amountPaidInput.value = amountPaid ? parseFloat(amountPaid).toFixed(2) : 0;
            });
        });

    </script>
</body>

</html>