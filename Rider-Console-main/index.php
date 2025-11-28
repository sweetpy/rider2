<!DOCTYPE html>
<html lang="en">


<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon"> <!-- Favicon-->
  <title>Sign In</title>
  <!-- project css file  -->
  <link rel="stylesheet" href="assets/css/luno-style.css">
  <!-- Jquery Core Js -->
  <script src="assets/js/plugins.js"></script>
</head>

<body id="layout-1" data-luno="theme-blue">
  <!-- start: body area -->
  <div class="wrapper">
    <div class="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
            <div style="max-width: 25rem;">
              <div class="mb-5">
                <h2 class="color-900">Rider | Förare </h2>
              </div>
              <!-- List Checked -->
              <ul class="list-unstyled mb-5">
                <li class="mb-4">
                  <span class="d-block mb-1 fs-4 fw-light">Welcome Pilot</span>
                  <span class="color-600">Seamless, Reliable, and Affordable Vehicle Rentals for
                    Every Driver</span>
                </li>
              </ul>

            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-center align-items-center">
            <div class="card shadow-sm w-100 p-4 p-md-5" style="max-width: 32rem;">
              <div class="mb-4">
                <h2 class="color-900">Sign In</h2>
              </div>

              <!-- Error Banner -->
              <?php if (isset($_GET['error']) ): ?>
                <div class="alert alert-danger" style="opacity:1;" role="alert">
                  <?= str_replace('_', ' ', $_GET['error']); ?>
                </div>
              <?php endif; ?>

              <!-- Form -->
              <form class="row g-3" action="/engine/authentication.php" method="post">
                <div class="col-12">
                  <div class="mb-2">
                    <label class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control form-control-lg"
                      placeholder="name@example.com">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-2">
                    <div class="form-label">
                      </span>
                    </div>
                    <input id="password" name="password" class="form-control form-control-lg" type="password"
                      placeholder="Enter the password">
                  </div>
                </div>
                <div class="col-12 text-center mt-4">
                  <button class="btn btn-lg btn-block btn-dark lift text-uppercase" type="submit">SIGN
                    IN</button>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
        </div> <!-- End Row -->
      </div>
    </div>
    <script src="assets/dist/bootstrap-show-password.min.js"></script>
    <script>
      $(function () {
        $('#password').password()
      })
    </script>
  </div>
  <!-- Jquery Page Js -->
  <script src="assets/js/theme.js"></script>
  <!-- Plugin Js -->
</body>

</html>