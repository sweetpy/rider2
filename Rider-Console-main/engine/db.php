<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];

$host = 'localhost';
$username = 'root';
$password = 'localhost';
$database = 'ridertz_general';

// Create connection
$db = new mysqli($host, $username, $password, $database);

// Check connection
if ($db->connect_error) {
    error_log("Connection failed: " . $db->connect_error);
    die("Connection failed: " . $db->connect_error);
}

$CDN_ROOT_DIR = $ROOT_DIR;
$CDN_URL = 'http://localhost:8000';
?>