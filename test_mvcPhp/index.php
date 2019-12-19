<?php

// подключаем необходимые файлы
define('ROOT', dirname(__FILE__));

require_once('Router.php');

// подключаем конфигурацию URL
$routes= 'routes.php';


// запускаем роутер
$router = new Router($routes);
$router->run();

?>