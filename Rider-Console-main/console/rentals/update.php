<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$rental_id = $rider_id = $vehicle_id = $rental_start_date = $rental_end_date = $total_amount_due = $status = "";
$success_message = $error_message = "";

// Get the rental ID from the URL
if (isset($_GET['rental_id'])) {
    $rental_id = $_GET['rental_id'];
} else {
    $error_message = 'Rental ID is required to edit the agreement.';
}

// Fetch current rental agreement details
if (empty($error_message)) {
    $stmt = $db->prepare("SELECT * FROM rental_agreements WHERE rental_id = ?");
    if (!$stmt) {
        $error_message = "Database error: Unable to prepare statement.";
    } else {
        $stmt->bind_param("i", $rental_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $rental = $result->fetch_assoc();
            $rider_id = $rental['rider_id'];
            $vehicle_id = $rental['vehicle_id'];
            $rental_start_date = $rental['rental_start_date'];
            $rental_end_date = $rental['rental_end_date'];
            $total_amount_due = $rental['total_amount_due'];
            $status = $rental['status'];
        } else {
            $error_message = 'Rental Agreement not found.';
        }
        $stmt->close();
    }
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get posted values and sanitize
    $rider_id = isset($_POST['rider_id']) ? trim($_POST['rider_id']) : '';
    $vehicle_id = isset($_POST['vehicle_id']) ? trim($_POST['vehicle_id']) : ''; // still using 'vehicle_id' from form
    $rental_start_date = isset($_POST['rental_start_date']) ? trim($_POST['rental_start_date']) : '';
    $rental_end_date = isset($_POST['rental_end_date']) ? trim($_POST['rental_end_date']) : '';
    $total_amount_due = isset($_POST['total_amount_due']) ? trim($_POST['total_amount_due']) : 0.00;
    $status = isset($_POST['status']) ? trim($_POST['status']) : 'active';

    // Validate required fields
    if (empty($rider_id) || empty($vehicle_id) || empty($rental_start_date)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        // Check if the vehicle exists before updating
        $stmt = $db->prepare("SELECT vehicle_id FROM vehicles WHERE vehicle_id = ?");
        $stmt->bind_param("i", $vehicle_id);
        $stmt->execute();
        $vehicle_exists = $stmt->get_result()->num_rows > 0;
        $stmt->close();

        if (!$vehicle_exists) {
            $error_message = 'The selected vehicle does not exist or has been removed. Please choose a valid vehicle.';
        } else {
            // Proceed with the update
            $stmt = $db->prepare("UPDATE rental_agreements 
                                  SET rider_id = ?, vehicle_id = ?, rental_start_date = ?, rental_end_date = ?, total_amount_due = ?, status = ? 
                                  WHERE rental_id = ?");
            if (!$stmt) {
                $error_message = "Database error: Unable to prepare update statement.";
            } else {
                $stmt->bind_param("iissdsi", $rider_id, $vehicle_id, $rental_start_date, $rental_end_date, $total_amount_due, $status, $rental_id);

                if ($stmt->execute()) {
                    $success_message = 'Rental Agreement updated successfully.';
                } else {
                    $error_message = 'Error updating rental agreement. Please ensure the selected vehicle is valid.';
                }
                $stmt->close();
            }
        }
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
                                        <a href="/console/rentals/" class="btn btn-primary">
                                            <i class="fas fa-arrow-left"></i> Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-header">
                                <h6 class="card-title mb-0">Update Rental Agreement</h6>
                            </div>
                            <form method="post">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success"  style="opacity:1;"><?php echo htmlspecialchars($success_message); ?>
                                        </div>
                                        <script type="text/javascript">
                                            setTimeout(function () {
                                                window.location.href = '/console/rentals/';
                                            }, 3000);
                                        </script>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger"  style="opacity:1;"><?php echo htmlspecialchars($error_message); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="row g-3">
                                        <!-- Rider -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rider *</label>
                                            <select name="rider_id" class="form-control form-control-lg" required>
                                                <option value="">Select Rider</option>
                                                <?php
                                                $riders_result = $db->query("SELECT rider_id, name FROM riders");
                                                while ($rider = $riders_result->fetch_assoc()) {
                                                    echo "<option value='" . $rider['rider_id'] . "' " . ($rider_id == $rider['rider_id'] ? 'selected' : '') . ">" . htmlspecialchars($rider['name']) . "</option>";
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Vehicle -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Vehicle *</label>
                                            <select name="vehicle_id" class="form-control form-control-lg" required>
                                                <option value="">Select Vehicle</option>
                                                <?php
                                                $vehicles_result = $db->query("SELECT vehicle_id, registration_no FROM vehicles");
                                                while ($vehicle = $vehicles_result->fetch_assoc()) {
                                                    echo "<option value='" . $vehicle['vehicle_id'] . "' " . ($vehicle_id == $vehicle['vehicle_id'] ? 'selected' : '') . ">" . htmlspecialchars($vehicle['registration_no']) . "</option>";
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Rental Start Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rental Start Date *</label>
                                            <input type="datetime-local" name="rental_start_date"
                                                class="form-control form-control-lg" required
                                                value="<?php echo htmlspecialchars($rental_start_date); ?>">
                                        </div>

                                        <!-- Rental End Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rental End Date</label>
                                            <input type="datetime-local" name="rental_end_date"
                                                class="form-control form-control-lg"
                                                value="<?php echo htmlspecialchars($rental_end_date); ?>">
                                        </div>

                                        <!-- Total Amount Due -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Total Amount Due</label>
                                            <input type="number" name="total_amount_due"
                                                class="form-control form-control-lg"
                                                value="<?php echo htmlspecialchars($total_amount_due); ?>" step="0.01">
                                        </div>

                                        <!-- Status -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Status</label>
                                            <select name="status" class="form-control form-control-lg">
                                                <option value="active" <?php echo ($status == 'active' ? 'selected' : ''); ?>>Active</option>
                                                <option value="completed" <?php echo ($status == 'completed' ? 'selected' : ''); ?>>Completed</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Update Rental Agreement</button>
                                    <button type="reset" class="btn btn-default">Cancel</button>
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