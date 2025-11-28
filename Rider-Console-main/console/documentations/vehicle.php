<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

$business_id = $BUSINESS_ID;

// Query to fetch Vehicles and their documents for the current business
$query = "
    SELECT 
        v.vehicle_id, 
        v.registration_no, 
        v.model, 
        a.attachment_id,
        a.file_representation, 
        a.file_name, 
        a.file_path 
    FROM vehicles v
    LEFT JOIN attachments a 
        ON a.associated_id = v.vehicle_id AND a.associated_type = 'vehicle'
    WHERE v.business_id = ?
";

$stmt = $db->prepare($query);
$stmt->bind_param("i", $business_id);
$stmt->execute();
$vehicles = $stmt->get_result();
?>


<!-- Plugin css file -->
<link rel="stylesheet" href="/assets/cssbundle/dataTables.min.css">

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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Vehicle Docs</h1>
                        <small class="text-muted">
                            <?= $FULL_NAME ?> accessing via <?= $BUSINESS_NAME; ?> channel &nbsp;&nbsp;
                            <span id="datetime"></span>
                            <script>document.getElementById('datetime').textContent = new Date().toLocaleString();</script>
                        </small>
                    </div>
                </div>
                <div class="col-md-12 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col text-end">
                                    <a href="/console/documentations/add.php" class="btn btn-primary">
                                        <i class="fas fa-plus"></i> Add Documents
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <table id="BikeList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0">#Doc ID</th>
                                        <th class="border-top-0">Vehicle Registration</th>
                                        <th class="border-top-0">Model</th>
                                        <th class="border-top-0">Documentations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $currentBikeId = null;
                                    $documents = []; // Array to store documents for each vehicle
                                    while ($vehicle = $vehicles->fetch_assoc()):
                                        if ($vehicle['vehicle_id'] !== $currentBikeId):
                                            // Print the previous vehicle's documents if applicable
                                            if ($currentBikeId !== null): ?>
                                                <td>
                                                    <?php if (!empty($documents)): ?>
                                                        <ul>
                                                            <?php foreach ($documents as $doc): ?>
                                                                <li>
                                                                    <a href="<?= htmlspecialchars($doc['file_path']) ?>" target="_blank">
                                                                        <?= htmlspecialchars($doc['file_representation']) ?>
                                                                    </a>
                                                                </li>
                                                            <?php endforeach; ?>
                                                        </ul>
                                                    <?php else: ?>
                                                        No Documents
                                                    <?php endif; ?>
                                                </td>
                                                </tr>
                                                <?php
                                            endif;
                                            $currentBikeId = $vehicle['vehicle_id'];
                                            $documents = []; // Reset documents for the new vehicle
                                            ?>
                                            <tr>
                                                <td><?= $vehicle['attachment_id'] ?></td>
                                                <td><?= htmlspecialchars($vehicle['registration_no']) ?></td>
                                                <td><?= htmlspecialchars($vehicle['model']) ?></td>
                                                <?php
                                        endif; // Collect documents for the current vehicle
                                        if (!empty($vehicle['file_representation'])):
                                            $documents[] = [
                                                'file_representation' => $vehicle['file_representation'],
                                                'file_path' => $vehicle['file_path']
                                            ];
                                        endif;
                                    endwhile;

                                    // Print the last vehicle's documents
                                    if ($currentBikeId !== null): ?>
                                            <td>
                                                <?php if (!empty($documents)): ?>
                                                    <ul>
                                                        <?php foreach ($documents as $doc): ?>
                                                            <li>
                                                                <a href="<?= htmlspecialchars($doc['file_path']) ?>"
                                                                    target="_blank">
                                                                    <?= htmlspecialchars($doc['file_representation']) ?>
                                                                </a>
                                                            </li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                <?php else: ?>
                                                    No Documents
                                                <?php endif; ?>
                                            </td>
                                        </tr>
                                    <?php endif; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="/assets/js/theme.js"></script>
    <script src="/assets/js/bundle/dataTables.bundle.js"></script>
    <script>
        $(document).ready(function () {
            $('#BikeList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                });
        });
    </script>
</body>

</html>