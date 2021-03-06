<?

//namespace \;

class Router {
    // Хранит конфигурацию маршрутов.
    private $routes;
 
    function __construct($routesPath){
        // Получаем конфигурацию из файла.
        $this->routes = include($routesPath);
    }
 
    // Метод получает URI. Несколько вариантов представлены для надёжности.
    function getURI(){
        if(!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
 
        if(!empty($_SERVER['PATH_INFO'])) {
            return trim($_SERVER['PATH_INFO'], '/');
        }
 
        if(!empty($_SERVER['QUERY_STRING'])) {
            return trim($_SERVER['QUERY_STRING'], '/');
        }
    }
 
    function run(){
        // Получаем URI.
        $uri = $this->getURI();
 
        // Пытаемся применить к нему правила из конфигуации.
        foreach($this->routes as $pattern => $route){
            echo $pattern;
            $controllerFile = $pattern.'Controller.php';
            $params = "1";
            echo "|".$controllerFile."|";
            if(file_exists($controllerFile)){
                include($controllerFile);
                $action = 'index';
                //$test = new indexController();
               if(is_callable($controllerFile,true)){
                    echo " TRUE";
                    call_user_func_array(array($controllerFile, $action));
               }
                //call_user_func()
            
            // Если правило совпало.
            
           /* if(preg_match("~$pattern~", $uri)){
                echo "1";
                // Получаем внутренний путь из внешнего согласно правилу.
                $internalRoute = preg_replace("~$pattern~", $route, $uri);
                // Разбиваем внутренний путь на сегменты.
                $segments = explode('/', $internalRoute);
                // Первый сегмент — контроллер.
                $controller = ucfirst(array_shift($segments)).'Controller';
                // Второй — действие.
                /*
                $action = 'action'.ucfirst(array_shift($segments));
                // Остальные сегменты — параметры.
                $parameters = $segments;
                
 
                // Подключаем файл контроллера, если он имеется
                $controllerFile = $controller.'.php';
                if(file_exists($controllerFile)){
                    include($controllerFile);
                }
 
                // Если не загружен нужный класс контроллера или в нём нет
                // нужного метода — 404 
                if(!is_callable(array($controller, $action))){
                    echo "not found 1";
                    return;
                }
 
                // Вызываем действие контроллера с параметрами
                call_user_func_array(array($controller, $action), $params);*/
            
        }
    }
        // Ничего не применилось. 404.
        echo " |not found 2| ";
        return;
    }
}
?>