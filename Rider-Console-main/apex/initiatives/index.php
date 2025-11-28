<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
include $ROOT_DIR . '/utils/business.php';

if ($ROLE != 'superadmin') {
    header("Location: /index.php?error=unauthorized");
    exit();
}

// Fetch all initiatives
$initiatives = Business::fetchAll();

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
            <div class="container">
                <div class="row align-items-center mb-5">
                    <div class="col-auto">
                        <h1 class="fs-5 color-900 mt-1 mb-0">Hi, <?= $FULL_NAME ?></h1>
                        <small class="text-muted">Subscribed to channel: <?= $BUSINESS_NAME; ?>.</small>
                    </div>
                    <div class="col d-flex justify-content-lg-end mt-2 mt-md-0">
                        <div class="p-2 me-md-3">
                            <div><span class="h6 mb-0"><?= number_format($totalBusinesses); ?></span></div>
                            <small class="text-muted text-uppercase">Initiatives</small>
                        </div>
                    </div>
                </div> <!-- .row end -->

                <div class="row">
                    <?php foreach ($initiatives as $initiative) : ?>
                    <div class="col-12 my-2">
                        <div class="card overflow-visible">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col ml-n2">
                                        <h5 class="mb-1"><a href="#"><?= $initiative['business_name'] ?></a></h5>
                                        <p class="text-muted mb-1">Type: <?= $initiative['business_type'] ?>, Created at: <?= $initiative['created_at'] ?></p>
                                        <p class="small mb-0"><span class="text-success">●</span> Managers:</p>
                                        <ul>
                                            <?php 
                                            $managers = Business::fetchAdministrators($initiative['business_id']);
                                            foreach ($managers as $manager) : ?>
                                                <li><?= $manager['full_name'] ?> (<?= $manager['email'] ?>)</li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <a href="/apex/initiatives/update.php?id=<?= $initiative['business_id'] ?>" class="btn btn-sm btn-primary d-none d-md-inline-block">Update info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>

            </div>
        </div>
    </div>
    <script src="/assets/js/theme.js"></script>
</body>