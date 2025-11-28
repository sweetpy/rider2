<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';

// Query to fetch riders and their documents for the current business
$query = "
    SELECT 
        r.rider_id, 
        r.name, 
        a.attachment_id,
        a.file_representation, 
        a.file_name, 
        a.file_path 
    FROM riders r
    LEFT JOIN attachments a 
        ON a.associated_id = r.rider_id AND a.associated_type = 'rider'
    WHERE r.business_id = ?
";

$stmt = $db->prepare($query);
$stmt->bind_param("i", $BUSINESS_ID);
$stmt->execute();
$riders = $stmt->get_result();
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
                        <h1 class="fs-5 color-900 mt-1 mb-0">Driver Docs</h1>
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
                            <table id="RiderList" class="table dataTable mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-top">#doc id</th>
                                        <th class="border-top-0">Rider Name</th>
                                        <th class="border-top-0">Documentations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $currentRiderId = null;
                                    $documents = []; // Array to store documents for each rider
                                    while ($rider = $riders->fetch_assoc()):
                                        if ($rider['rider_id'] !== $currentRiderId):
                                            // Print the previous rider's documents if applicable
                                            if ($currentRiderId !== null): ?>
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
                                            $currentRiderId = $rider['rider_id'];
                                            $documents = [];
                                            ?>
                                            <tr>
                                                <td><?= $rider['attachment_id'] ?></td>
                                                <td><strong><?= htmlspecialchars($rider['name']) ?></strong></td>
                                                <?php
                                        endif; // Collect documents for the current rider
                                        if (!empty($rider['file_representation'])):
                                            $documents[] = [
                                                'file_representation' => $rider['file_representation'],
                                                'file_path' => $rider['file_path']
                                            ];
                                        endif;
                                    endwhile;

                                    // Print the last rider's documents
                                    if ($currentRiderId !== null): ?>
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
            $('#RiderList')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                });
        });
    </script>
</body>

</html>