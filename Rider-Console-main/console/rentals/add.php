<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$rider_id = $vehicle_id = $rental_start_date = $rental_end_date = $total_amount_due = $status = "";
$success_message = $error_message = "";

// Business context
$business_id = $_SESSION['business_id'] ?? null;
if (!is_numeric($business_id)) {
    die("Invalid business ID.");
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get posted values and sanitize
    $rider_id = isset($_POST['rider_id']) ? trim($_POST['rider_id']) : '';
    $vehicle_id = isset($_POST['vehicle_id']) ? trim($_POST['vehicle_id']) : ''; // Still using 'vehicle_id' in form name
    $rental_start_date = isset($_POST['rental_start_date']) ? trim($_POST['rental_start_date']) : '';
    $rental_end_date = isset($_POST['rental_end_date']) ? trim($_POST['rental_end_date']) : '';
    $total_amount_due = isset($_POST['total_amount_due']) ? trim($_POST['total_amount_due']) : 0.00;
    $status = isset($_POST['status']) ? trim($_POST['status']) : 'active';

    // Validate required fields
    if (empty($rider_id) || empty($vehicle_id) || empty($rental_start_date)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        // Prepare the SQL statement
        $stmt = $db->prepare("INSERT INTO rental_agreements (rider_id, vehicle_id, rental_start_date, rental_end_date, total_amount_due, status, business_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($db->error));
        }

        // Bind parameters
        $stmt->bind_param("iissdsi", $rider_id, $vehicle_id, $rental_start_date, $rental_end_date, $total_amount_due, $status, $business_id);

        // Execute the statement
        if ($stmt->execute()) {
            $success_message = 'Rental Agreement added successfully.';
            $rider_id = $vehicle_id = $rental_start_date = $rental_end_date = $total_amount_due = $status = "";
        } else {
            $error_message = 'Error adding rental agreement: ' . htmlspecialchars($stmt->error);
        }

        $stmt->close();
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
                                <h6 class="card-title mb-0">Add New Rental Agreement</h6>
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
                                                $riders_result = $db->query("SELECT rider_id, name FROM riders where business_id = $business_id");
                                                while ($rider = $riders_result->fetch_assoc()) {
                                                    echo "<option value='" . $rider['rider_id'] . "' " . ($rider_id == $rider['rider_id'] ? 'selected' : '') . ">" . htmlspecialchars($rider['name']) . "</option>";
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Vehicle -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Vehicle *</label>
                                            <select name="vehicle_id" id="vehicle_id" class="form-control form-control-lg"
                                                required>
                                                <option value="">Select Vehicle</option>
                                                <?php
                                                $vehicles_result = $db->query("SELECT vehicle_id, registration_no, daily_rental_fee FROM vehicles where business_id = $business_id");
                                                while ($vehicle = $vehicles_result->fetch_assoc()) {
                                                    echo "<option data-cost='" . htmlspecialchars($vehicle['daily_rental_fee']) . "' value='" . $vehicle['vehicle_id'] . "' " . ($vehicle_id == $vehicle['vehicle_id'] ? 'selected' : '') . ">" . htmlspecialchars($vehicle['registration_no']) . " daily fee: " . htmlspecialchars($vehicle['daily_rental_fee']) . "/- Tsh. </option>";
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Rental Start Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rental Start Date *</label>
                                            <input type="datetime-local" id="rental_start_date" name="rental_start_date"
                                                class="form-control form-control-lg" required
                                                value="<?php echo htmlspecialchars($rental_start_date); ?>">
                                        </div>

                                        <!-- Time Of Life (Rental Existence in months) -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rental Duration (in months)</label>
                                            <input type="number" id="rental-age" class="form-control form-control-lg"
                                                value="">
                                        </div>

                                        <!-- Rental End Date -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rental End Date</label>
                                            <input type="datetime-local" id="rental_end_date" name="rental_end_date"
                                                class="form-control form-control-lg" readonly
                                                value="<?php echo htmlspecialchars($rental_end_date); ?>">
                                        </div>

                                        <script>
                                            document.addEventListener('DOMContentLoaded', function () {



                                            });
                                        </script>

                                        <!-- Total Amount Due -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Total Amount for <span
                                                    id="time-of-life">---</span> days</label>
                                            <input type="number" name="total_amount_due" id="total_amount_due"
                                                class="form-control form-control-lg" readonly
                                                value="<?php echo htmlspecialchars($total_amount_due); ?>" step="0.01">
                                        </div>

                                        <script>
                                            document.addEventListener('DOMContentLoaded', function () {
                                                const startDateInput = document.getElementById('rental_start_date');
                                                const endDateInput = document.getElementById('rental_end_date');
                                                const timeOfLifeSpan = document.getElementById('time-of-life');
                                                const totalAmountDueInput = document.getElementById('total_amount_due');
                                                const vehicleSelect = document.getElementById('vehicle_id');
                                                const rentalAgeInput = document.getElementById('rental-age');

                                                function calculateEndDate() {
                                                    const startDate = new Date(startDateInput.value);
                                                    const rentalMonths = parseInt(rentalAgeInput.value, 10);

                                                    if (!isNaN(startDate) && !isNaN(rentalMonths)) {
                                                        const endDate = new Date(startDate);
                                                        endDate.setMonth(endDate.getMonth() + rentalMonths);
                                                        endDateInput.value = endDate.toISOString().slice(0, 16); // Format as yyyy-MM-ddTHH:mm
                                                    }
                                                }

                                                rentalAgeInput.addEventListener('input', calculateEndDate);
                                                startDateInput.addEventListener('change', calculateEndDate);

                                                function calculateDays() {
                                                    const startDate = new Date(startDateInput.value);
                                                    const endDate = new Date(endDateInput.value);
                                                    const selectedBikeOption = vehicleSelect.options[vehicleSelect.selectedIndex];
                                                    const dailyCost = parseInt(selectedBikeOption.getAttribute('data-cost')) || 0;

                                                    if (startDate && endDate && !isNaN(startDate) && !isNaN(endDate)) {
                                                        const timeDifference = endDate - startDate;
                                                        const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
                                                        timeOfLifeSpan.textContent = daysDifference + " ";
                                                        totalAmountDueInput.value = (daysDifference * dailyCost);
                                                    } else {
                                                        timeOfLifeSpan.textContent = '---';
                                                        totalAmountDueInput.value = '0';
                                                    }
                                                }

                                                startDateInput.addEventListener('change', calculateDays);
                                                endDateInput.addEventListener('change', calculateDays);
                                                vehicleSelect.addEventListener('change', calculateDays);


                                                rentalAgeInput.addEventListener('input', calculateDays);
                                                startDateInput.addEventListener('change', calculateDays);
                                            });
                                        </script>

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
                                    <button type="submit" class="btn btn-primary">Add Rental Agreement</button>
                                    <button type="reset" class="btn btn-default">Clear</button>
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