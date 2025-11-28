<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$name = $phone = $email = $address = $driver_license_no = "";
$success_message = $error_message = "";

// Check for valid business ID
if (!$BUSINESS_ID) {
    die("Unauthorized access: No business selected.");
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
        // Prepare the SQL statement
        $stmt = $db->prepare("INSERT INTO riders (name, phone, email, address, driver_license_no, business_id) VALUES (?, ?, ?, ?, ?, ?)");
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($db->error));
        }

        // Bind parameters
        $stmt->bind_param("sssssi", $name, $phone, $email, $address, $driver_license_no, $BUSINESS_ID);

        // Execute the statement
        if ($stmt->execute()) {
            $success_message = 'Rider registered successfully.';
            // Reset form values
            $name = $phone = $email = $address = $driver_license_no = "";
        } else {
            $error_message = 'Error registering rider: ' . htmlspecialchars($stmt->error);
        }

        // Close statement
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

                <div class="row align-items-center mb-5">
                    <div class="col-auto">
                        <h1 class="fs-5 color-900 mt-1 mb-0">Riders</h1>
                        <small class="text-muted">
                            <?= $FULL_NAME ?> accessing via <?= $BUSINESS_NAME; ?> channel &nbsp;&nbsp;
                            <span id="datetime"></span>
                            <script>document.getElementById('datetime').textContent = new Date().toLocaleString();</script>
                        </small>
                    </div>
                </div>

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
                                <h6 class="card-title mb-0">Register New Rider</h6>
                            </div>
                            <form method="post">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success" style="opacity:1;"><?php echo htmlspecialchars($success_message); ?>
                                        </div>
                                        <script type="text/javascript">
                                            setTimeout(function () {
                                                window.location.href = '/console/riders/';
                                            }, 3000);
                                        </script>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger" style="opacity:1;"><?php echo htmlspecialchars($error_message); ?>
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
                                    <button type="submit" class="btn btn-primary">Register</button>
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