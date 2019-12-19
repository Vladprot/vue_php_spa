<template>
<div id="app">
<div class="test">
  <div v-if="showModal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
           <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" v-model="ticket['name']">
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Another label</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" v-model="ticket['email']">
              </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="ticket['textTicket']"></textarea>
                </div>
            </form>

          <div class="modal-footer">
              <button class="modal-default-button" @click="clickAxiosPost">
                Создать задачу
              </button>
              <button class="modal-default-button" @click="showModal = false">
                Отмена
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>    
  </div>  
  <!--<button @click="register" type="button" class="btn btn-primary">Проверка функций</button> -->
  <button @click="clickAxiosGet" type="button" class="btn btn-primary">Проверка GET запроса</button>
  <button @click="clickAxiosPost" type="button" class="btn btn-secondary">Проверка POST запроса</button>
  <button @click="register" type="button" class="btn btn-success">Создать задачу</button>
  <hr/>
  <div v-for="post in posts" :key="post.id">
  {{post.name}}
  {{post.email}}
  {{post.text}}
  <hr/>
  </div>
  
</div>
</div>
</template>

<script>
import axios from "axios"

export default {
  data () {
    return {
      showModal:false,
      ticket:{
        name:null,
        email:null,
        textTicket:null,
      },
      posts:{},
      resDataAxios:{},
    }
  },
  methods: {
    register(){
      this.showModal = true;
    },
    clickAxiosGet(){
      axios
        .get('http://localhost/index.php')
        .then(response => (this.posts= response.data))
        .catch(error => { alert(error); })
    },
    clickAxiosPost(){  
      this.showModal = false  
      axios
        .post('http://localhost/index.php',this.ticket)
        .then(response => (this.resDataAxios = response.data))
        .catch(error => { alert(error); })
    },

  },
  mounted(){
    {
      axios
        .get('http://localhost/index.php')
        .then(response => (this.posts= response.data))
        .catch(error => { alert(error); })
    }
  }
}
</script>
<style scoped>
.test{
  width: 1000px;
  margin: 0 auto;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
