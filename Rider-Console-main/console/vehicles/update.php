<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$vehicle_id = isset($_GET['vehicle_id']) ? $_GET['vehicle_id'] : '';
$registration_no = $model = $status = $daily_rental_fee = "";
$success_message = $error_message = "";

// Fetch vehicle details from the database
if (!empty($vehicle_id)) {
    $stmt = $db->prepare("SELECT * FROM vehicles WHERE vehicle_id = ?");
    $stmt->bind_param("i", $vehicle_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $vehicle = $result->fetch_assoc();
        $registration_no = $vehicle['registration_no'];
        $model = $vehicle['model'];
        $status = $vehicle['status'];
        $daily_rental_fee = $vehicle['daily_rental_fee'];
    } else {
        $error_message = "Vehicle not found!";
    }

    $stmt->close();
}

// Update vehicle details
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $registration_no = isset($_POST['registration_no']) ? trim($_POST['registration_no']) : '';
    $model = isset($_POST['model']) ? trim($_POST['model']) : '';
    $status = isset($_POST['status']) ? trim($_POST['status']) : '';
    $daily_rental_fee = isset($_POST['daily_rental_fee']) ? trim($_POST['daily_rental_fee']) : '';

    if (empty($registration_no) || empty($model) || empty($status) || empty($daily_rental_fee)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        $stmt = $db->prepare("UPDATE vehicles SET registration_no = ?, model = ?, status = ?, daily_rental_fee = ? WHERE vehicle_id = ?");
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($db->error));
        }

        $stmt->bind_param("ssssi", $registration_no, $model, $status, $daily_rental_fee, $vehicle_id);

        if ($stmt->execute()) {
            $success_message = 'Vehicle updated successfully.';
        } else {
            $error_message = 'Error updating vehicle: ' . htmlspecialchars($stmt->error);
        }

        $stmt->close();
    }
}
?>

<body class="layout-1" data-luno="theme-blue">
<?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

<div class="wrapper">
    <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

    <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-start">
                                    <a href="/console/vehicles/" class="btn btn-primary">
                                        <i class="fas fa-arrow-left"></i> Back
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header">
                            <h6 class="card-title mb-0">Update Vehicle Details</h6>
                        </div>
                        <form method="post">
                            <div class="card-body">
                                <?php if (!empty($success_message)): ?>
                                    <div class="alert alert-success text-success" <?php if (!empty($success_message)): ?> style="opacity: 1" <?php endif; ?>>
                                        <?php echo htmlspecialchars($success_message); ?>, Please wait for page redirect
                                    </div>
                                    <script type="text/javascript">
                                        setTimeout(function () {
                                            window.location.href = '/console/vehicles/';
                                        }, 3000);
                                    </script>
                                <?php endif; ?>
                                <?php if (!empty($error_message)): ?>
                                    <div class="alert alert-danger" <?php if (!empty($error_message)): ?> style="opacity: 1" <?php endif; ?>>
                                        <?php echo htmlspecialchars($error_message); ?>
                                    </div>
                                <?php endif; ?>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label class="form-label">Registration No *</label>
                                        <input type="text" class="form-control form-control-lg" name="registration_no" required
                                               value="<?php echo htmlspecialchars($registration_no); ?>" placeholder="Enter registration number">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label">Model *</label>
                                        <input type="text" class="form-control form-control-lg" name="model" required
                                               value="<?php echo htmlspecialchars($model); ?>" placeholder="Enter model">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label">Status *</label>
                                        <select class="form-select form-select-lg" name="status" required>
                                            <option value="available" <?php echo ($status == 'available') ? 'selected' : ''; ?>>Available</option>
                                            <option value="rented" <?php echo ($status == 'rented') ? 'selected' : ''; ?>>Rented</option>
                                            <option value="under maintenance" <?php echo ($status == 'under maintenance') ? 'selected' : ''; ?>>Under Maintenance</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label">Daily Rental Fee *</label>
                                        <input type="number" step="0.01" class="form-control form-control-lg" name="daily_rental_fee" required
                                               value="<?php echo htmlspecialchars($daily_rental_fee); ?>" placeholder="Enter daily rental fee">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Update</button>
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
