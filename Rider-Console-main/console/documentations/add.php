<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$success_message = $error_message = "";
$associated_type = "";
$riders = [];
$vehicles = [];

function processFilename($filename)
{
    return preg_replace('/[ ,\(\)\[\]\-]/', '_', $filename);
}

// Fetch riders and vehicles (vehicles) for dropdowns
$rider_stmt = $db->prepare("SELECT rider_id, name FROM riders WHERE business_id = ?");
$rider_stmt->bind_param("i", $BUSINESS_ID);
$rider_stmt->execute();
$rider_result = $rider_stmt->get_result();
while ($row = $rider_result->fetch_assoc()) {
    $riders[] = $row;
}
$rider_stmt->close();

$vehicle_stmt = $db->prepare("SELECT vehicle_id, registration_no FROM vehicles WHERE business_id = ?");
$vehicle_stmt->bind_param("i", $BUSINESS_ID);
$vehicle_stmt->execute();
$vehicle_result = $vehicle_stmt->get_result();
while ($row = $vehicle_result->fetch_assoc()) {
    $vehicles[] = $row;
}
$vehicle_stmt->close();

// Handle file upload
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $associated_type_input = $_POST['associated_type'] ?? '';
    $associated_type = $associated_type_input === 'vehicle' ? 'vehicle' : $associated_type_input;

    $associated_id = null;
    if ($associated_type_input === 'rider') {
        $associated_id = intval($_POST['rider_associated_id'] ?? 0);
    } elseif ($associated_type_input === 'vehicle') {
        $associated_id = intval($_POST['vehicle_associated_id'] ?? 0);
    }

    $file_representation = trim($_POST['file_representation'] ?? '');
    $file_description = trim($_POST['file_description'] ?? '');
    $file_name = processFilename($_FILES['file']['name'] ?? '');
    $file_tmp = $_FILES['file']['tmp_name'] ?? '';

    $upload_dir = "$ROOT_DIR/uploads/{$associated_type}";
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }

    $unique_file_name = uniqid() . '-' . basename($file_name);
    $file_path = "$upload_dir/$unique_file_name";
    $relative_file_path = "/uploads/{$associated_type}/$unique_file_name";

    if (empty($associated_type) || empty($associated_id) || empty($file_name) || empty($file_tmp)) {
        $error_message = 'Please fill in all required fields.';
    } else {
        if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
            if (move_uploaded_file($file_tmp, $file_path)) {
                $stmt = $db->prepare("
                    INSERT INTO attachments (
                        associated_id, associated_type, file_representation,
                        file_name, file_path, file_description
                    ) VALUES (?, ?, ?, ?, ?, ?)
                ");
                $stmt->bind_param(
                    "isssss",
                    $associated_id,
                    $associated_type,
                    $file_representation,
                    $file_name,
                    $relative_file_path,
                    $file_description
                );

                if ($stmt->execute()) {
                    $success_message = 'Documentation added successfully.';
                } else {
                    $error_message = 'Error saving document: ' . $stmt->error;
                }
                $stmt->close();
            } else {
                $error_message = 'Error moving uploaded file.';
            }
        } else {
            $error_message = 'File upload error: Code ' . $_FILES['file']['error'];
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
                            <div class="card-header">
                                <h6 class="card-title mb-0">Add Documentation</h6>
                            </div>
                            <form method="post" enctype="multipart/form-data">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success" style="opacity:1;">
                                            <?php echo htmlspecialchars($success_message); ?>
                                            <script>
                                                setTimeout(function () {
                                                    window.location.href = '/console/documentations/<?php echo htmlspecialchars($associated_type); ?>.php';
                                                }, 2000);
                                            </script>
                                        </div>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger" style="opacity:1;">
                                            <?php echo htmlspecialchars($error_message); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="row g-3">
                                        <!-- Documentation Type Dropdown -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Documentation Type *</label>
                                            <select id="docTypeDropdown" class="form-control form-control-lg"
                                                name="associated_type" required>
                                                <option value="">Select Documentation Type</option>
                                                <option value="rider">Rider document</option>
                                                <option value="vehicle">Vehicle document</option>
                                            </select>
                                        </div>

                                        <!-- Rider Dropdown (Initially hidden) -->
                                        <div class="col-sm-6" id="riderDropdownContainer" style="display:none;">
                                            <label class="form-label">Select Rider *</label>
                                            <select class="form-control form-control-lg" name="rider_associated_id"
                                                id="riderDropdown">
                                                <option value="">Select Rider</option>
                                                <?php foreach ($riders as $rider): ?>
                                                    <option value="<?php echo htmlspecialchars($rider['rider_id']); ?>">
                                                        <?php echo htmlspecialchars($rider['name']); ?>
                                                    </option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>

                                        <!-- Vehicle Dropdown (Initially hidden) -->
                                        <div class="col-sm-6" id="vehicleDropdownContainer" style="display:none;">
                                            <label class="form-label">Select Vehicle *</label>
                                            <select class="form-control form-control-lg" name="vehicle_associated_id"
                                                id="vehicleDropdown">
                                                <option value="">Select Vehicle</option>
                                                <?php foreach ($vehicles as $vehicle): ?>
                                                    <option value="<?php echo htmlspecialchars($vehicle['vehicle_id']); ?>">
                                                        <?php echo htmlspecialchars($vehicle['registration_no']); ?>
                                                    </option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>

                                        <!-- File Representation -->
                                        <div class="col-sm-6">
                                            <label class="form-label">File Representation *</label>
                                            <input type="text" class="form-control form-control-lg"
                                                placeholder="What is this file about? License, NIDA ID, Insurance etc..."
                                                name="file_representation" required>
                                        </div>

                                        <!-- File Upload -->
                                        <div class="col-sm-6">
                                            <label class="form-label">Select File *</label>
                                            <input type="file" class="form-control" name="file" accept="*/*" required>
                                        </div>

                                        <!-- File Description -->
                                        <div class="col-sm-12">
                                            <label class="form-label">File Description</label>
                                            <textarea class="form-control form-control-lg" rows="5"
                                                name="file_description"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    <button type="reset" class="btn btn-default">clear</button>
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
        document.getElementById('docTypeDropdown').addEventListener('change', function () {
            var docType = this.value;
            var riderContainer = document.getElementById('riderDropdownContainer');
            var vehicleContainer = document.getElementById('vehicleDropdownContainer');

            // Hide both initially
            riderContainer.style.display = 'none';
            vehicleContainer.style.display = 'none';

            // Show the relevant dropdown based on the selection
            if (docType === 'rider') {
                riderContainer.style.display = 'block';
            } else if (docType === 'vehicle') {
                vehicleContainer.style.display = 'block';
            }
        });
    </script>
</body>

</html>