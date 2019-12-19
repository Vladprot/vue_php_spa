<?php

header("Access-Control-Allow-Headers: *");
$mysqli = mysqli_connect("localhost", "root", "", "test");
$res = mysqli_query($mysqli,"SELECT * FROM users");
$row = mysqli_fetch_assoc($res);


echo json_encode($row);


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_POST = json_decode(file_get_contents("php://input"),true);
    $testName = $_POST;
    $post = mysqli_query($mysqli,"INSERT INTO `users` (`id`, `name`, `email`, `text`) VALUES (NULL, '$testName', 'test@test.ru', 'qweqweqe');");
}

?>
<form action="test.php" method="post">
    <input type="text">
    <input type="submit">
</form>