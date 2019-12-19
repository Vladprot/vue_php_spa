<?php

header('Content-type: application/json');
$mysqli = mysqli_connect("localhost", "root", "", "test");
$res = mysqli_query($mysqli,"SELECT * FROM users");
$row = mysqli_fetch_assoc($res);

echo json_encode($row);


class DataBaseQuerys {

    public const USER_NAME     = "root";
    public const HOST_NAME     = "localhost";
    public const PASSWORD      = "";
    public const DATABASE_NAME = "test";
    
   public function DataBaseConnect(){
        $connectResult = mysqli_connect("localhost", "root", "", "test");
        if($connectResult){
            echo " true connect  ";
        }else {
            echo "Ошибка соединения";
        }
        return $connectResult;
    }
    
    public function GetUsers(){
        $resultGetQuery = mysqli_fetch_assoc(mysqli_query($this->DataBaseConnect(),"SELECT * FROM users"));
        if($resultGetQuery){
            echo " true query DB ";
        }else {
            echo "Ошибка запроса";
        }
        return $resultGetUsers;
    }

    public function ResultUrl($url){
        if($_SERVER['REQUEST_METHOD'] == 'GET' && $_SERVER['REQUEST_URI'] == '/test.php'){
            $resultTest = $this->GetUsers();
            print_r($resultTest);
            echo "1";
        }
        return $resultTest;
    }

}

$obj = new DataBaseQuerys();
$obj->DataBaseConnect();
$obj->GetUsers();
$url = $_SERVER;
print_r($url);
$obj->ResultUrl($url);

?>