<?php
if (!isset($_SESSION)) {
    session_start();
}

$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require $ROOT_DIR . '/engine/db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['email']) && isset($_POST['password'])) {
        // Sanitize inputs
        $email = $db->real_escape_string(trim($_POST['email']));
        $submittedPassword = trim($_POST['password']);

        // Fetch administrator data based on email only
        $query = "SELECT id, username, email, password, business_id, role, status, full_name, created_at, updated_at 
                  FROM administrator 
                  WHERE email = '$email' 
                  LIMIT 1";
        $result = $db->query($query);

        if ($result && $result->num_rows == 1) {
            $user = $result->fetch_assoc();

            // Verify password: using password_verify if hashed OR a plain text check as a fallback.
            if (password_verify($submittedPassword, $user['password']) || $submittedPassword === $user['password']) {

                // Check if account is active
                if ($user['status'] != 1) {
                    error_log("Login failed: Inactive account for email: $email");
                    header("Location: /index.php?error=Your_account_was_deactivated");
                    exit();
                }

                // Get Business details
                $business_id = $user['business_id'];
                $result = $db->query("SELECT * FROM businesses WHERE business_id = " . $business_id);
                $business = $result->fetch_assoc();

                if ($business['business_id'] != $business_id) {
                    error_log("Login failed: Inactive business for email: $email");
                    header("Location: /index.php?error=inactive_account");
                    exit();
                }

                // Regenerate session ID for security
                session_regenerate_id(true);

                // Store all administrator data in session
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['business_id'] = $user['business_id']; // For multi-tenancy scoping
                $_SESSION['business_name'] = $business['business_name'];
                $_SESSION['business_type'] = $business['business_type'];
                $_SESSION['role'] = $user['role']; // superadmin, business_manager, editor
                $_SESSION['full_name'] = $user['full_name'];
                $_SESSION['status'] = $user['status'];
                $_SESSION['created_at'] = $user['created_at'];
                $_SESSION['updated_at'] = $user['updated_at'];
                $_SESSION['logged_in'] = true;
                $_SESSION['last_login'] = time();

                // Log successful login
                error_log("Login successful for user: $email, role: {$user['role']}, business_id: {$user['business_id']}");

                // Redirect to console
                if($user['role'] == 'superadmin') {
                    header("Location: /apex/index.php");
                } else {
                    header("Location: /console/index.php");
                }
                exit();
            } else {
                error_log("Login failed: Invalid credentials for email: $email");
                header("Location: /index.php?error=Invalid_credentials");
                exit();
            }
        } else {
            error_log("Login failed: Invalid credentials for email: $email");
            header("Location: /index.php?error=Invalid_credentials");
            exit();
        }
    } else {
        error_log("Login failed: Missing email or password");
        header("Location: /index.php?error=Missing_Credentials");
        exit();
    }
} else {
    error_log("Login failed: Invalid request method");
    header("Location: /index.php?error=What_are_you_doing_is_not_allowed");
    exit();
}
?>