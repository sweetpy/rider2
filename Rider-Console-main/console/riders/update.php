<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$rider_id = isset($_GET['rider_id']) ? intval($_GET['rider_id']) : null;
$name = $phone = $email = $address = $driver_license_no = "";
$success_message = $error_message = "";

// Ensure business ID is available from session
if (!$BUSINESS_ID) {
    die("Unauthorized access: Missing business context.");
}

// Fetch the rider details if rider_id is provided
if ($rider_id) {
    $stmt = $db->prepare("SELECT name, phone, email, address, driver_license_no FROM riders WHERE rider_id = ? AND business_id = ?");
    $stmt->bind_param("ii", $rider_id, $BUSINESS_ID);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $rider = $result->fetch_assoc();
        $name = $rider['name'];
        $phone = $rider['phone'];
        $email = $rider['email'];
        $address = $rider['address'];
        $driver_license_no = $rider['driver_license_no'];
    } else {
        $error_message = "Rider not found or does not belong to your business.";
    }

    $stmt->close();
} else {
    $error_message = "Invalid rider ID.";
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get posted values and sanitize
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $address = isset($_POST['address']) ? trim($_POST['address']) : '';
    $driver_license_no = isset($_POST['driver_license_no']) ? trim($_POST['driver_license_no']) : '';

    // Validate required fields
    if (empty($name) || empty($phone) || empty($driver_license_no)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        // If no errors, update the database
        $stmt = $db->prepare("UPDATE riders SET name = ?, phone = ?, email = ?, address = ?, driver_license_no = ? 
                              WHERE rider_id = ? AND business_id = ?");
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($db->error));
        }

        // Bind parameters
        $stmt->bind_param("sssssii", $name, $phone, $email, $address, $driver_license_no, $rider_id, $BUSINESS_ID);

        // Execute the statement
        if ($stmt->execute()) {
            $success_message = 'Rider details updated successfully.';
        } else {
            $error_message = 'Error updating rider details: ' . htmlspecialchars($stmt->error);
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
                                        <a href="/console/riders/" class="btn btn-primary">
                                            <i class="fas fa-arrow-left"></i> Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-header">
                                <h6 class="card-title mb-0">Update Rider Information</h6>
                            </div>
                            <form method="post">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success text-success" <?php if (!empty($success_message)): ?> style="opacity: 1" <?php endif; ?>>
                                            <?php echo htmlspecialchars($success_message); ?>, Please wait for page redirect
                                        </div>
                                        <script type="text/javascript">
                                            setTimeout(function () {
                                                window.location.href = '/console/riders/';
                                            }, 3000);
                                        </script>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger" <?php if (!empty($error_message)): ?> style="opacity: 1" <?php endif; ?>>
                                            <?php echo htmlspecialchars($error_message); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="row g-3">
                                        <!-- Rider Name -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Rider Name *</label>
                                            <input type="text" class="form-control form-control-lg" name="name" required
                                                value="<?php echo htmlspecialchars($name); ?>"
                                                placeholder="Enter rider name">
                                        </div>

                                        <!-- Rider Phone -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Phone *</label>
                                            <input type="text" class="form-control form-control-lg" name="phone"
                                                required value="<?php echo htmlspecialchars($phone); ?>"
                                                placeholder="Enter phone number">
                                        </div>

                                        <!-- Rider Email -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control form-control-lg" name="email"
                                                value="<?php echo htmlspecialchars($email); ?>"
                                                placeholder="Enter email address">
                                        </div>

                                        <!-- Rider Address -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Address</label>
                                            <input type="text" class="form-control form-control-lg" name="address"
                                                value="<?php echo htmlspecialchars($address); ?>"
                                                placeholder="Enter address">
                                        </div>

                                        <!-- Rider Driver License No -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Driver License No *</label>
                                            <input type="text" class="form-control form-control-lg"
                                                name="driver_license_no" required
                                                value="<?php echo htmlspecialchars($driver_license_no); ?>"
                                                placeholder="Enter driver license number">
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