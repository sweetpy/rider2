<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$rental_id = $payment_date = $amount_paid = $payment_method = $payment_status = "";
$success_message = $error_message = $reference = $payment_type = "";
$business_id = $BUSINESS_ID ?? null;

// Ensure business context exists
if (!$business_id) {
    $error_message = "Unauthorized access. Business context missing.";
    return;
}

// Handle form submission for update
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    $rental_id = trim($_POST['rental_id'] ?? '');
    $amount_paid = trim($_POST['amount_paid'] ?? 0.00);
    $payment_method = trim($_POST['payment_method'] ?? 'cash');
    $payment_status = trim($_POST['payment_status'] ?? 'completed');
    $payment_id = trim($_POST['payment_id'] ?? '');
    $payment_date = trim($_POST['payment_date'] ?? date('Y-m-d H:i:s'));
    $payment_type = trim($_POST['payment_type'] ?? 'daily');

    if (empty($rental_id) || empty($amount_paid) || empty($payment_id)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        $stmt = $db->prepare("
            UPDATE payments p
            JOIN rental_agreements ra ON p.rental_id = ra.rental_id
            SET p.rental_id = ?, p.amount_paid = ?, p.payment_method = ?, 
                p.payment_status = ?, p.payment_date = ?, p.payment_type = ?
            WHERE p.payment_id = ? AND ra.business_id = ?
        ");

        if (!$stmt) {
            die('Prepare failed: ' . htmlspecialchars($db->error));
        }

        $stmt->bind_param("ssssssii", $rental_id, $amount_paid, $payment_method, $payment_status, $payment_date, $payment_type, $payment_id, $business_id);

        if ($stmt->execute()) {
            $success_message = 'Payment updated successfully.';

            $mail_to = "support@flit.tz";
            $mail_subject = "Payment Update Notification: Payment ID $payment_id";
            $mail_body = "
                Dear Support Team,

                A payment record has been updated.

                **Updated Details:**
                - **Payment ID**: $payment_id
                - **Rental ID**: $rental_id
                - **Amount Paid**: $amount_paid
                - **Payment Method**: $payment_method
                - **Payment Status**: $payment_status
                - **Payment Date**: $payment_date
                - **Payment Type**: $payment_type
                - **Updated By**: {$_SESSION['username']}
                - **Timestamp**: " . date('Y-m-d H:i:s') . "

                Please verify if needed.

                Regards,
                System Bot
            ";

            $mails_to_cc = ["support@chapu.tz", "edgar@flit.tz"];
            send_mail($mail_to, $mail_subject, $mail_body, $mails_to_cc);

            $rental_id = $amount_paid = $payment_method = $payment_status = $payment_date = $reference = $payment_type = "";
        } else {
            $error_message = 'Error updating payment: ' . htmlspecialchars($stmt->error);
        }

        $stmt->close();
    }
}

// Handle deletion
if (isset($_GET['delete'])) {
    $payment_id = intval($_GET['delete']);

    $delete_stmt = $db->prepare("
        DELETE p FROM payments p
        JOIN rental_agreements ra ON p.rental_id = ra.rental_id
        WHERE p.payment_id = ? AND ra.business_id = ?
    ");

    if (!$delete_stmt) {
        die('Prepare failed: ' . htmlspecialchars($db->error));
    }

    $delete_stmt->bind_param("ii", $payment_id, $business_id);

    $mail_to = "support@flit.tz";
    $mail_subject = "Payment Deletion Notification: Payment ID $payment_id";
    $mail_body = "
        Dear Support Team,

        A payment record has been deleted.

        **Details:**
        - **Payment ID**: $payment_id
        - **Deleted By**: {$_SESSION['username']}
        - **Timestamp**: " . date('Y-m-d H:i:s') . "

        Please review if necessary.

        Regards,
        System Bot
    ";

    $mails_to_cc = ["support@chapu.tz", "edgar@flit.tz"];
    send_mail($mail_to, $mail_subject, $mail_body, $mails_to_cc);

    if ($delete_stmt->execute()) {
        $success_message = 'Payment deleted successfully.';
    } else {
        $error_message = 'Error deleting payment: ' . htmlspecialchars($delete_stmt->error);
    }

    $delete_stmt->close();
}

// Fetch payment details if editing
if (isset($_GET['edit'])) {
    $payment_id = intval($_GET['edit']);

    $stmt = $db->prepare("
        SELECT p.* FROM payments p
        JOIN rental_agreements ra ON p.rental_id = ra.rental_id
        WHERE p.payment_id = ? AND ra.business_id = ?
    ");
    $stmt->bind_param("ii", $payment_id, $business_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $payment = $result->fetch_assoc();
        $rental_id = $payment['rental_id'];
        $amount_paid = $payment['amount_paid'];
        $payment_method = $payment['payment_method'];
        $payment_status = $payment['payment_status'];
        $payment_date = $payment['payment_date'];
        $payment_type = $payment['payment_type'];
        $reference = $payment['reference'];
    } else {
        $error_message = 'Payment record not found or does not belong to your business.';
    }

    $stmt->close();
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
                                <h6 class="card-title mb-0">Update Payment. REF:
                                    <?php echo htmlspecialchars($reference ?? "This payment might've been updated. please revise it"); ?>
                                </h6>
                                <p class="mt-3 alert show alert-info" style="opacity:1">⚠️ Please be careful with the
                                    updates, Records updated here will be emailed to support account for recon.</p>
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
                                                window.location.href = '/console/transactions/';
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
                                            <select name="rental_id" class="form-control form-control-lg" required>
                                                <option value="">Select Rental Agreement</option>
                                                <?php
                                                // Query to fetch active rental agreements
                                                if ($business_id) {
                                                    $query = "SELECT ra.rental_id, r.name AS rider_name, v.registration_no 
                                                        FROM rental_agreements ra
                                                        JOIN riders r ON ra.rider_id = r.rider_id
                                                        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
                                                        WHERE ra.status = 'active' AND ra.business_id = ?";

                                                    $stmt = $db->prepare($query);
                                                    $stmt->bind_param("i", $business_id);
                                                    $stmt->execute();
                                                    $rental_result = $stmt->get_result();

                                                    while ($rental = $rental_result->fetch_assoc()) {
                                                        echo "<option value='" . $rental['rental_id'] . "' " . ($rental_id == $rental['rental_id'] ? 'selected' : '') . ">"
                                                            . htmlspecialchars($rental['rider_name']) . " - " . htmlspecialchars($rental['registration_no'])
                                                            . "</option>";
                                                    }

                                                    $stmt->close();
                                                } else {
                                                    echo "<option disabled>No business context available.</option>";
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Amount Paid -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Amount Paid *</label>
                                            <input type="number" name="amount_paid" class="form-control form-control-lg"
                                                required value="<?php echo htmlspecialchars($amount_paid); ?>"
                                                step="0.01">
                                        </div>

                                        <!-- Payment Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Payment Date
                                                (<?php echo htmlspecialchars($payment_date); ?>)</label>
                                            <input type="date" name="payment_date" class="form-control form-control-lg"
                                                value="<?php echo htmlspecialchars(date('Y-m-d', strtotime($payment_date))); ?>"
                                                required>
                                        </div>

                                        <!-- Payment Type -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Payment Type</label>
                                            <select name="payment_type" id="payment_type"
                                                class="form-control form-control-lg">
                                                <option value="daily" <?php echo ($payment_type == 'daily' ? 'selected' : ''); ?>>Daily</option>
                                                <option value="onboarding" <?php echo ($payment_type == 'onboarding' ? 'selected' : ''); ?>>Onboarding</option>
                                            </select>
                                        </div>

                                        <!-- Payment Method -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Payment Method</label>
                                            <select name="payment_method" class="form-control form-control-lg">
                                                <option value="cash" <?php echo ($payment_method == 'cash' ? 'selected' : ''); ?>>Cash</option>
                                                <option value="mobile money" <?php echo ($payment_method == 'mobile money' ? 'selected' : ''); ?>>Mobile Money</option>
                                                <option value="card" <?php echo ($payment_method == 'card' ? 'selected' : ''); ?>>Card</option>
                                            </select>
                                        </div>

                                        <!-- Payment Status -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Payment Status</label>
                                            <select name="payment_status" class="form-control form-control-lg">
                                                <option value="completed" <?php echo ($payment_status == 'completed' ? 'selected' : ''); ?>>Completed</option>
                                                <option value="pending" <?php echo ($payment_status == 'pending' ? 'selected' : ''); ?>>Pending</option>
                                                <option value="failed" <?php echo ($payment_status == 'failed' ? 'selected' : ''); ?>>Failed</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                    <input type="hidden" name="payment_id"
                                        value="<?php echo htmlspecialchars($payment_id); ?>">
                                    <button type="submit" name="update" class="btn btn-primary">Update Payment</button>
                                    <a href="?delete=<?php echo htmlspecialchars($payment_id); ?>"
                                        class="btn btn-danger"
                                        onclick="return confirm('Are you sure you want to delete this payment?')">Delete
                                        Payment</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <script src="/assets/js/theme.js"></script>
</body>

</html>