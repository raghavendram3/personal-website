<?php
$images = glob('/images/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
shuffle($images);
$images = array_map('basename', $images);
header('Content-Type: application/json');
echo json_encode($images);
?>
