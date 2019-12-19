<?php

//подключение к БД
//header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$mysqli = mysqli_connect("localhost", "root", "", "test");
$res = mysqli_query($mysqli,"SELECT * FROM `users`");
$row = mysqli_fetch_all($res);
$testRow =  json_encode($row);

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    //echo "GET";
    print_r($testRow);
    
}
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);
    //echo "POST";
    $postName = $data['name'];
    $postEmail = $data['email'];
    $postText = $data['textTicket'];
    mysqli_query($mysqli,"INSERT INTO `users` (`id`, `name`, `email`, `text`) VALUES (NULL, '$postName', '$postEmail', '$postText');");
}
?>


