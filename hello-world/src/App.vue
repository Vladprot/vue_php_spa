<template>
  <div id="app">
    <div>
      <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Создание задачи</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Имя</label>
          <input type="unput" class="form-control" id="formGroupExampleInput" placeholder="Введите имя" v-model="name">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input type="input" class="form-control" id="formGroupExampleInput2" placeholder="Введите емаил" >
        </div>
         <div class="form-group">
          <label for="formGroupExampleInput2">Текст задачи</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Введите описание задачи" >
        </div>
      </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Создать задачу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    </div>
    
    <button type="button" class="btn btn-outline-dark">Создать задачу</button>
    <button type="button" class="btn btn-secondary" >Close</button>
    <button type="button" class="btn">Запросить данные</button>
    
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="http://localhost:8080/test.html">Имя</a></li>
        <li class="breadcrumb-item"><a href="#">Емаил</a></li>
        <li class="breadcrumb-item active" aria-current="page">Статус</li>
      </ol>
    </nav>


 </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      info:null,
      info2:null,
      info3:{},
      isModalVisible:false,
      name:null,
    };
  },
  
  }
</script>

