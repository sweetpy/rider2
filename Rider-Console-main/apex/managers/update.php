<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

if ($ROLE != 'superadmin') {
    header("Location: /index.php?error=unauthorized");
    exit();
}

$admin_id = isset($_GET['id']) ? intval($_GET['id']) : 0;
$success_message = $error_message = "";
$username = $email = $full_name = $role = $status = $business_id = "";

// Fetch businesses
$businesses = [];
$stmt = $db->prepare("SELECT * FROM businesses");
$stmt->execute();
$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
    $businesses[] = $row;
}
$stmt->close();

// Fetch admin data
$stmt = $db->prepare("SELECT * FROM administrator WHERE id = ?");
$stmt->bind_param("i", $admin_id);
$stmt->execute();
$result = $stmt->get_result();
$admin = $result->fetch_assoc();
$stmt->close();

if (!$admin) {
    die("Administrator not found.");
}

$username = $admin['username'];
$email = $admin['email'];
$full_name = $admin['full_name'];
$role = $admin['role'];
$status = $admin['status'];
$business_id = $admin['business_id'];

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $full_name = trim($_POST['full_name']);
    $role = trim($_POST['role']);
    $status = trim($_POST['status']);
    $business_id = intval($_POST['business']);

    if (empty($username) || empty($email) || empty($full_name) || empty($role) || empty($business_id)) {
        $error_message = "Please fill in all required fields.";
    } else {
        $stmt = $db->prepare("UPDATE administrator SET username = ?, email = ?, full_name = ?, role = ?, status = ?, business_id = ? WHERE id = ?");
        $stmt->bind_param("ssssssi", $username, $email, $full_name, $role, $status, $business_id, $admin_id);

        if ($stmt->execute()) {
            $success_message = "Administrator updated successfully.";
        } else {
            $error_message = "Error updating administrator: " . $stmt->error;
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
                                        <a href="/apex/managers" class="btn btn-primary">
                                            <i class="fas fa-arrow-left"></i> Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-header">
                                <h6 class="card-title mb-0">Update Administrator</h6>
                            </div>
                            <form method="post">
                                <div class="card-body">
                                    <?php if (!empty($success_message)): ?>
                                        <div class="alert alert-success" style="opacity: 1;"><?php echo htmlspecialchars($success_message); ?>
                                        </div>
                                        <script>setTimeout(() => window.location.href = '/apex/managers', 2000);</script>
                                    <?php endif; ?>
                                    <?php if (!empty($error_message)): ?>
                                        <div class="alert alert-danger" style="opacity: 1;"><?php echo htmlspecialchars($error_message); ?>
                                        </div>
                                    <?php endif; ?>

                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label class="form-label">Full Name *</label>
                                            <input type="text" class="form-control" name="full_name" required
                                                value="<?php echo htmlspecialchars($full_name); ?>">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Username *</label>
                                            <input type="text" class="form-control" name="username" required
                                                value="<?php echo htmlspecialchars($username); ?>">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Email *</label>
                                            <input type="email" class="form-control" name="email" required
                                                value="<?php echo htmlspecialchars($email); ?>">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Role *</label>
                                            <select class="form-select" name="role" required>
                                                <option value="">Select Role</option>
                                                <option value="business_manager" <?php echo ($role == 'business_manager') ? 'selected' : ''; ?>>Business Manager</option>
                                                <option value="superadmin" <?php echo ($role == 'superadmin') ? 'selected' : ''; ?>>Super Admin</option>
                                                <option value="editor" <?php echo ($role == 'editor') ? 'selected' : ''; ?>>Editor</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Business *</label>
                                            <select class="form-select" name="business" required>
                                                <option value="">Select Business</option>
                                                <?php foreach ($businesses as $business): ?>
                                                    <option value="<?php echo $business['business_id']; ?>" <?php echo ($business_id == $business['business_id']) ? 'selected' : ''; ?>>
                                                        <?php echo htmlspecialchars($business['business_name']); ?></option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Status *</label>
                                            <select class="form-select" name="status" required>
                                                <option value="1" <?php echo ($status == '1') ? 'selected' : ''; ?>>Active
                                                </option>
                                                <option value="0" <?php echo ($status == '0') ? 'selected' : ''; ?>>
                                                    Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Update Administrator</button>
                                    <button type="reset" class="btn btn-secondary">Clear</button>
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