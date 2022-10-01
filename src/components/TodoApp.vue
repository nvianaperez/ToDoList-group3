<!--***************TEMPLATE***********************-->
<template>
  <div class="container">
    <h2 class="text-center mt-5 md-3" id="header">
      Vue TODO APP- GROUP 3
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </h2>

    <!-- CAJITA DONDE INTRODUCIR LA NUEVA TAREA CON SU BOTON SUBMIT -->

    <div class="d-flex flex-column" id="newTask">
      <input
        v-model="task"
        type=" text"
        placeholder=" Add new task"
        class="form-control"
      />
      <input
        v-model="description"
        type=" textarea"
        placeholder=" Please specify the task"
        class="form-control"
      />
      <button @click="submitTask" class="btn btn-primary rounded-0 btn-sm">
        + SUBMIT
      </button>
    </div>

    <!-- CAJITA PARA BUSCAR TAREAS-->
    <div class="container mt-2" id="search-filter">
      <input
        class="rounded mr-1 text-center border-info"
        type="search"
        placeholder="Search"
      />
      <span>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </span>
    </div>

    <!--CAJITA PARA FILTRAR MOSTRAR TAREAS NO COMPLETADAS-->
    <!-- <div class="container mt-2 " id="tareas-no-completadas"> 
        <input class="rounded mr-1 text-center border-info" type="search" placeholder="Search" />
        <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" />  </span>
        </div> -->

    <!-- CAJITA QUE TE DICE SI HAY MÁS DE TRES CAJAS  new!-->

    <!-- <span> {{numberTask}}</span> -->

    <!-- TASK TABLE -->
    <!-- Conceptos utilizados:  **v-for**  **:key**  **{{}}**-->

    <!-- table content -->
    <!-- VFOR  We can use to render a list of items based on an array// 
     for loop //The key attribute tells Vue how your data relates to the HTML elements
     it's rendering to the screen. When your data changes, Vue uses these keys to know which HTML elements
     to remove or update, and if it needs to create any new ones. -->
    <div
      v-for="(task, index) in tasks"
      :key="task.id"
      class="container-fluid row"
      :style="{ backgroundColor: task.status ? '#6ad86a42' : '#ff6d534d' }"
    >
      <!-- V-IF V-ELSE  if task editing is false ( we are not editing), show the task into the span, else, show the imput)-->
      <div class="col-2">
        <div class="text-primary text-center" @click.capture="editTask(index)">
          <font-awesome-icon icon="fa-solid fa-pencil" />
        </div>
        <p class="text-danger text-center" @click.capture="deleteTask(index)">
          X
        </p>
      </div>
      <!--This'll inject our task.name in our html-->
      <div class="col-9">
        <div class="">
          <span v-if="!task.editing" @dblclick="editTask(task)"
            >{{ task.name }}
          </span>
          <input
            v-else
            type="text"
            v-model="task.name"
            @keyup.enter="finishEdit($event, index, 'task')"
            @blur="finishEdit($event, index, 'task')"
          />
        </div>
        <div class="" v-if="!task.editing">{{ task.description }}</div>
        <input
          v-else
          type="text"
          v-model="task.description"
          @keyup.enter="finishEdit($event, index, 'description')"
          @blur="finishEdit($event, index, 'description')"
        />
      </div>
      <input type="checkbox" class="col-1" @change="changeStatus(index)" />

      <!-- <div> <span @click="changeStatus(index)" >{{task.status}}</span></div> -->
    </div>
  </div>
</template>

<script>
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data() {
    return {
      task: '',
      taskStatus: ['to-do', 'finished'],
      idforTask: 3,

      tasks: [
        {
          id: 1,
          name: 'title task 1',
          description: ' description task 1 ',
          status: 'to-do',
          completed: false,
          editing: false,
        },

        {
          id: 2,
          name: 'title task 2',
          description: ' description task 2 ',
          status: 'to-do',
          completed: false,
          editing: false,
        },
      ],
    };
  },

  // computed:{
  //     numberTask(){
  //         return this.tasks.length > 2 ? 'some new task now' : 'only standar tasks'
  //     },

  // },

  // computed: {
  //     tareasnofinalizadas(){
  //         return this.task
  //     }
  // }

  methods: {
    submitTask() {
      // / When the submit button is click, we want to make sure that is something enter in the imput, if the task.length is 0 just return anything.
      if (this.task.length === 0) return;

      // tasks.push to our array tasks an object with name (this.task)  ,  status  by defalult  to-do and this.description , esto funciona gracias a v-model-ver inputs linia 8 y 9

      this.tasks.push({
        id: this.idforTask,
        name: this.task,
        description: this.description,
        status: 'to-do',
        completed: false,
        editing: false,
      });

      // when we add the new task the  input should be empty, the same with the imput description
      this.task = '';
      this.description = '';

      //We also want to increase the id
      this.idforTask++;
    },

    //DELETE THE TASK

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    
    //EDITING THE TASK

    //editTASK
    editTask(task) {
      task.editing = true;
    },

    //stopEditing

    finishEdit(event, index, tipos) {
      this.tasks[index][tipos] = event.srcElement.value;
      this.tasks[index].editing = false;
    },

    changeStatus(index) {
      this.tasks[index].status = !this.tasks[index].status;
    },
  },
};
</script>

<style>
#newTask {
  margin: 20px;
  background-color: #5d68b1;
  padding: 50px;
}

</style>
