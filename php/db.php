<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "online_courses";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>