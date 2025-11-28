<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
include $ROOT_DIR . '/utils/business.php';

if ($ROLE != 'superadmin') {
    header("Location: /index.php?error=unauthorized");
    exit();
}

// Fetch all administrators
$admins = [];
$stmt = $db->prepare("SELECT id, full_name, email, role, created_at, status, business_id FROM administrator ORDER BY created_at DESC");
if ($stmt) {
    $stmt->execute();
    $result = $stmt->get_result();
    while ($row = $result->fetch_assoc()) {
        $admins[] = $row;
    }
    $stmt->close();
}

// Query to get total number of administrator accounts
$totalAdministrators = 0;
$stmt = $db->query("SELECT COUNT(*) AS total FROM administrator");
if ($stmt) {
    $row = $stmt->fetch_assoc();
    $totalAdministrators = $row['total'];
}

// Query to get total number of businesses
$totalBusinesses = Business::countAll();

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
                            <div><span class="h6 mb-0"><?= number_format($totalAdministrators); ?></span> </div>
                            <small class="text-muted text-uppercase">Staff Accounts</small>
                        </div>
                        <div class="p-2 me-md-3">
                            <div><span class="h6 mb-0"><?= number_format($totalBusinesses); ?></span></div>
                            <small class="text-muted text-uppercase">Initiatives</small>
                        </div>
                    </div>
                </div> <!-- .row end -->

                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title m-0">Rider Staff</h6>
                                <div class="dropdown morphing scale-left">
                                    <a href="#" class="card-fullscreen" data-bs-toggle="tooltip"
                                        title="Card Full-Screen"><i class="icon-size-fullscreen"></i></a>
                                </div>
                            </div>
                            <div class="card-body">
                                <table class="table myDataTable table-hover align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Business</th>
                                            <th>Created Date</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($admins as $admin): ?>
                                            <tr>
                                                <td><?php echo htmlspecialchars($admin['full_name']); ?></td>
                                                <td><?php echo htmlspecialchars($admin['email']); ?></td>
                                                <td><?php
                                                $business = Business::fetchById($admin['business_id']);
                                                echo $business['business_name'] ?? "---" ?></td>
                                                <td><?php echo date('d M, Y', strtotime($admin['created_at'])); ?></td>
                                                <td><span
                                                        class="badge bg-<?php echo $admin['role'] === 'superadmin' ? 'danger' : 'info'; ?>">
                                                        <?php echo ucfirst($admin['role']); ?>
                                                    </span></td>
                                                <td>
                                                    <span
                                                        class="badge bg-<?php echo $admin['status'] == 1 ? 'success' : 'secondary'; ?>">
                                                        <?php echo $admin['status'] == 1 ? 'Active' : 'Inactive'; ?>
                                                    </span>
                                                </td>
                                                <td>
                                                    <?php if ($admin['role'] !== 'superadmin'): ?>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary"
                                                            onclick="window.location.href='/apex/managers/update.php?id=<?php echo $admin['id']; ?>'">
                                                            <i class="fa fa-edit"></i>
                                                        </button>
                                                    <?php endif; ?>
                                                </td>
                                            </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> <!-- Row end  -->
            </div>
        </div>
    </div>
    <script src="/assets/js/theme.js"></script>
</body>