<!-- start: page header -->
<header class="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
    <div class="container-fluid">
        <nav class="navbar">
            <!-- start: toggle btn -->
            <div class="d-flex">
                <button type="button" class="btn btn-link d-none d-xl-block sidebar-mini-btn p-0 text-primary">
                    <span class="hamburger-icon">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </span>
                </button>
                <button type="button" class="btn btn-link d-block d-xl-none menu-toggle p-0 text-primary">
                    <span class="hamburger-icon">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </span>
                </button>
            </div>


            <!-- start: search area -->
            <div class="header-left flex-grow-1 d-none d-md-block">
                <div class="main-search px-3 flex-fill">
                    <input class="form-control" type="text" placeholder="Enter your search key word">
                </div>
            </div>

            <!-- start: quick light dark -->
            <!-- <li class="d-none d-xl-inline-block">
                <a class="nav-link quick-light-dark" href="#">
                    <i class="fas fa-adjust"></i>
                </a>
            </li> -->

            <!-- start: quick light dark -->
            <li class="d-none d-xl-inline-block">
                <a class="nav-link fullscreen" href="javascript:void(0);" onclick="toggleFullScreen(documentElement)">
                    <i class="fa fa-expand"></i>
                </a>
            </li>

            <!-- start: link -->
            <ul class="header-right justify-content-end d-flex align-items-center mb-0">
                <!-- start: User dropdown-menu -->
                <li>
                    <div class="dropdown morphing scale-left user-profile mx-lg-3 mx-2">
                        <a class="nav-link dropdown-toggle rounded-circle after-none p-0" href="#" role="button"
                            data-bs-toggle="dropdown">
                            <img class="avatar img-thumbnail rounded-circle shadow" src="/assets/images/ic_logo.png"
                                alt="">
                        </a>
                        <div class="dropdown-menu border-0 rounded-4 shadow p-0">
                            <div class="card border-0 w240">
                                <div class="card-body border-bottom d-flex">
                                    <img class="avatar rounded-circle" src="/assets/images/ic_logo.png" alt="">
                                    <div class="flex-fill ms-3">
                                        <h6 class="card-title mb-0"><?php echo $FULL_NAME; ?></h6>
                                        <span
                                            class="text-muted"><?php echo $ROLE . ' <br>log: ' . $LAST_LOGIN; ?></span>
                                    </div>
                                </div>
                                <a href="#" class="btn bg-secondary text-light text-uppercase rounded-0">Session will
                                    kick you out.</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</header>