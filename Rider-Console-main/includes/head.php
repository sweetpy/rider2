<?php if (!isset($_SESSION)) {
    session_start();
}

$USER_ID = $_SESSION['user_id'] ?? NULL;
$USERNAME = $_SESSION['username'] ?? NULL;
$EMAIL = $_SESSION['email'] ?? NULL;
$BUSINESS_ID = $_SESSION['business_id'] ?? NULL;
$BUSINESS_NAME = $_SESSION['business_name'] ?? NULL;
$BUSINESS_TYPE = $_SESSION['business_type'] ?? NULL;
$ROLE = $_SESSION['role'] ?? NULL;
$FULL_NAME = $_SESSION['full_name'] ?? NULL;
$STATUS = $_SESSION['status'] ?? NULL;
$CREATED_AT = $_SESSION['created_at'] ?? NULL;
$UPDATED_AT = $_SESSION['updated_at'] ?? NULL;
$LOGGED_IN = $_SESSION['logged_in'] ?? NULL;
$LAST_LOGIN = $_SESSION['last_login'] ?? NULL;

if (is_null($USER_ID)) {
    echo "<script> window.location.href = '/' </script>";
}

function send_mail($to, $subject, $body, $cc = [])
{
    $headers = "From: console@rider.tz\r\n";
    $headers .= "Reply-To: support@rider.tz\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    if (!empty($cc)) {
        $headers .= "CC: " . implode(",", $cc) . "\r\n";
    }
    return mail($to, $subject, $body, $headers);
}

function formatLargeNumber($number)
{
    $num = floatval(str_replace(',', '', $number));

    if ($num >= 1000000) {
        $formatted = number_format($num / 1000000, 1);
        return rtrim($formatted, '.0') . 'M';
    } elseif ($num >= 1000) {
        $formatted = number_format($num / 1000, 1);
        return rtrim($formatted, '.0') . 'K';
    } else {
        return number_format($num); // return as-is for < 1K
    }
}


?>
<?php require_once $_SERVER['DOCUMENT_ROOT'] . '/engine/db.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Rider | Console</title>
    <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- icon-->
    <link rel="shortcut icon" href="/assets/images/ic_logo.png" type="image/x-icon">

    <link rel="stylesheet" href="/assets/css/luno-style.css">
    <script src="/assets/js/plugins.js"></script>

</head>