<?php
if (!isset($_SESSION)) {
    session_start();
}

$ROLE = $_SESSION['role'] ?? NULL;
?>
<style>
    .ms-link {
        margin-bottom: 10px;
    }
</style>

<div class="sidebar p-2 py-md-3">
    <div class="container-fluid">
        <!-- sidebar: title -->
        <div class="title-text d-flex align-items-center mb-4 mt-1">
            <h4 class="sidebar-title mb-0 flex-grow-1"><span class="sm-txt">Rider. Console</span><span>.</span></h4>

            <?php if ($ROLE == "superadmin"): ?>
                <div class="dropdown morphing scale-left">
                    <a class="dropdown-toggle more-icon" href="#" role="button" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-h"></i>
                    </a>
                    <ul class="dropdown-menu shadow border-0 p-2 mt-2" data-bs-popper="none">
                        <li class="fw-bold px-2">Admin Actions</li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="/apex/initiatives">Manage business</a></li>
                        <li><a class="dropdown-item" href="/apex/managers">Manage Administrators</a></li>
                    </ul>
                </div>
            <?php endif; ?>
        </div>

        <!-- for super admin -->
        <?php if ($ROLE == "superadmin"): ?>
            <!-- sidebar: MAIN Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">MAIN</span>
                    <br>
                    <small class="text-muted">Overview & Insights</small>
                </li>
                <li class="collapsed">
                    <a class="m-link" data-bs-toggle="collapse" data-bs-target="#dashboard_section" href="#">
                        <i class="fa fa-tachometer-alt"></i>
                        <span class="ms-2">Dashboard</span>
                        <span class="arrow fa fa-angle-right ms-auto text-end"></span>
                    </a>
                    <ul class="sub-menu collapse" id="dashboard_section">
                        <li><a class="ms-link" href="/apex/index.php">Overview</a></li>
                    </ul>
                </li>
            </ul>


            <!-- sidebar: Managers Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">MANAGERS</span>
                    <br>
                    <small class="text-muted">Manage and Onboard Managers</small>
                </li>
                <li>
                    <a class="m-link" href="/apex/managers/index.php">
                        <i class="fa fa-users-cog"></i>
                        <span class="ms-2">Manager List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/apex/managers/add.php">
                        <i class="fa fa-user-plus"></i>
                        <span class="ms-2">Add New Manager</span>
                    </a>
                </li>
            </ul>


            <!-- sidebar: Initiatives Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">INITIATIVES</span>
                    <br>
                    <small class="text-muted">Manage and Track Initiatives</small>
                </li>
                <li>
                    <a class="m-link" href="/apex/initiatives/index.php">
                        <i class="fa fa-lightbulb"></i>
                        <span class="ms-2">Initiative List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/apex/initiatives/add.php">
                        <i class="fa fa-plus"></i>
                        <span class="ms-2">Add Initiative</span>
                    </a>
                </li>
            </ul>

        <?php endif; ?>

        <!-- for business manager -->
        <?php if ($ROLE == "business_manager"): ?>
            <!-- sidebar: MAIN Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">MAIN</span>
                    <br>
                    <small class="text-muted">Overview & Insights</small>
                </li>
                <li class="collapsed">
                    <a class="m-link" data-bs-toggle="collapse" data-bs-target="#dashboard_section" href="#">
                        <i class="fa fa-tachometer-alt"></i>
                        <span class="ms-2">Dashboard</span>
                        <span class="arrow fa fa-angle-right ms-auto text-end"></span>
                    </a>
                    <ul class="sub-menu collapse" id="dashboard_section">
                        <li><a class="ms-link" href="/console/index.php">Overview</a></li>
                    </ul>
                </li>
            </ul>

            <!-- sidebar: Transaction Management Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">RENTAL & TRANSACTIONS</span>
                    <br>
                    <small class="text-muted">Track and Manage Payments</small>
                </li>
                <li>
                    <a class="m-link" href="/console/rentals/index.php">
                        <i class="fa fa-list"></i>
                        <span class="ms-2">Rental List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/rentals/add.php">
                        <i class="fa fa-plus"></i>
                        <span class="ms-2">Create Rental</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/transactions/index.php">
                        <i class="fa fa-wallet"></i>
                        <span class="ms-2">Transaction List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/transactions/add.php">
                        <i class="fa fa-edit"></i>
                        <span class="ms-2">Record Transactions</span>
                    </a>
                </li>
            </ul>


            <!-- sidebar: Rider Management Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">RIDER MANAGEMENT</span>
                    <br>
                    <small class="text-muted">Manage and Onboard Riders</small>
                </li>
                <li>
                    <a class="m-link" href="/console/riders/index.php">
                        <i class="fa fa-users"></i>
                        <span class="ms-2">Rider List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/riders/add.php">
                        <i class="fa fa-user-plus"></i>
                        <span class="ms-2">Add New Rider</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/riders/payments.php">
                        <i class="fa fa-money-bill-alt"></i>
                        <span class="ms-2">Rider Payments</span>
                    </a>
                </li>
            </ul>


            <!-- sidebar: Documentations -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">DOCUMENTATIONS</span>
                    <br>
                    <small class="text-muted">Guides and References</small>
                </li>
                <li>
                    <a class="m-link" href="/console/documentations/vehicle.php">
                        <i class="fa fa-book"></i>
                        <span class="ms-2">Vehicle Documentation</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/documentations/rider.php">
                        <i class="fa fa-book"></i>
                        <span class="ms-2">Rider Documentation</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/documentations/add.php">
                        <i class="fa fa-book"></i>
                        <span class="ms-2">Add Documentation</span>
                    </a>
                </li>
            </ul>

            <!-- sidebar: Vehicle Management Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">BIKE MANAGEMENT</span>
                    <br>
                    <small class="text-muted">Manage and Preview Bikes</small>
                </li>
                <li>
                    <a class="m-link" href="/console/vehicles/index.php">
                        <i class="fa fa-motorcycle"></i>
                        <span class="ms-2">Vehicle List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/vehicles/add.php">
                        <i class="fa fa-plus"></i>
                        <span class="ms-2">Add Vehicle</span>
                    </a>
                </li>
            </ul>


            <!-- sidebar: Expenses and Management Spending & Collections Section -->
            <ul class="menu-list">
                <li class="divider py-2 lh-sm">
                    <span class="small">EXPENSES & SPENDING</span>
                    <br>
                    <small class="text-muted">Manage Expenses and Spending</small>
                </li>
                <li>
                    <a class="m-link" href="/console/expenses/index.php">
                        <i class="fa fa-list"></i>
                        <span class="ms-2">Expense List</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/expenses/add.php">
                        <i class="fa fa-plus"></i>
                        <span class="ms-2">Add Expense</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/management/collections.php">
                        <i class="fa fa-clipboard-list"></i>
                        <span class="ms-2">Management Collections</span>
                    </a>
                </li>
                <li>
                    <a class="m-link" href="/console/management/create-collection.php">
                        <i class="fa fa-plus"></i>
                        <span class="ms-2">Create Collection</span>
                    </a>
                </li>

                <?php if ($ROLE == "superadmin"): ?>
                    <li>
                        <a class="m-link" href="/console/transactions/admin-preview.php">
                            <i class="fa fa-"></i>
                            <span class="ms-2">Admin Preview [Transactions]</span>
                        </a>
                    </li>
                <?php endif; ?>
            </ul>

            <!-- sidebar: Settings Section -->
            <ul class="menu-list d-none">
                <li class="divider py-2 lh-sm">
                    <span class="small">SETTINGS</span>
                    <br>
                    <small class="text-muted">Application Settings</small>
                </li>
                <li>
                    <a class="m-link" href="/console/settings.php">
                        <i class="fa fa-cog"></i>
                        <span class="ms-2">Settings</span>
                    </a>
                </li>
            </ul>
        <?php endif; ?>

        <!-- sidebar: footer link -->
        <ul class="menu-list nav navbar-nav flex-row text-center menu-footer-link">
            <li class="nav-item flex-fill p-2">
                <a class="d-inline-block w-100 color-400" href="/console/auth-signout.php" title="Sign-out">
                    <i class="fa fa-sign-out-alt"></i>
                </a>
            </li>
        </ul>
    </div>
</div>



<script>
    window.onload = function () {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('a.m-link, a.ms-link');

        links.forEach(function (link) {
            if (link.pathname === currentPath) {
                link.classList.add('active');

                const parentUl = link.closest('ul');
                if (parentUl && parentUl.classList.contains('collapse')) {
                    parentUl.classList.add('show');
                }
            }
        });
    };
</script>