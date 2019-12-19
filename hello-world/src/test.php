<?php
header('Content-type: application/json');
$mysqli = mysqli_connect("mysql.zzz.com.ua", "thisproto", "efcnh2043cnh21qQ", "this");
$res = mysqli_query($mysqli,"SELECT * FROM users");
$row = mysqli_fetch_assoc($res);
$jsontest = "qwe";
echo json_encode($row);

?>