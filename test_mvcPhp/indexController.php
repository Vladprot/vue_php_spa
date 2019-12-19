<?


class Controller {
    //protected $view;
 
    function __construct(){
        // используем наш View, описанный ранее
        //$this->view = new View();
    }
 
    // другие полезные методы вроде redirect($url);
}

class indexController extends Controller {
    // параметр отдаётся из правила 'page/([-_a-z0-9]+)' => 'page/show/$1',
    function index(/*$url = null*/){
        // получаем страницу
        //$page = $this->getPage($url);
        echo "  3333 ";
        //return "123";
        // выводим её при помощи View
        //$this->view->render('page', array('page' => $page));
    }
}

?>