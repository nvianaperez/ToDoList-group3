<!--******************TEMPLATE***********************-->
<template>
  <div class="container">

    <!-- table content -->
    <!-- VFOR  We can use to render a list of items based on an array// 
        for loop //The key attribute tells Vue how your data relates to the HTML elements
        it's rendering to the screen. When your data changes, Vue uses these keys to know which HTML elements
        to remove or update, and if it needs to create any new ones. -->
    <div v-for="(task, index) in filteredList" :key="task.id" :id="'task' + task.id"
      class="deletedTask transition row mb-2 py-2 rounded"
      :style="{ backgroundColor: !task.status ? '#6ad86a42' : '#ff6d534d' }">
      <!-- V-IF V-ELSE  if task editing is false ( we are not editing), show the task into the span, else, show the imput)-->
      <div class="col-1">
        <div class="text-primary text-center" @click.capture="editTask(index)">
          <font-awesome-icon icon="fa-solid fa-pencil" />
        </div>
        <div class="text-center" @click.capture="deleteTask(index)">
          <span class="deleteIcon text-danger">X</span>
        </div>
      </div>
      <!--This'll inject our task.name in our html-->
      <div class="col-10">
        <div class="">
          <span class="text-primary fs-4 col-9 description" v-if="!task.editingName"
            @dblclick="editTask(task, 'name')">{{ task.name }}
          </span>
          <input v-else type="text" v-model="task.name" @keyup.enter="finishEdit($event, index, 'task')"
            @blur="finishEdit($event, index, 'task')" />
        </div>
        <div class="text-secondary fs-6 description col-9" v-if="!task.editingDescription"
          @dblclick="editTask(task, 'description')">
          {{ task.description }}
        </div>
        <input v-else type="text" v-model="task.description" @keyup.enter="finishEdit($event, index, 'description')"
          @blur="finishEdit($event, index, 'description')" />
      </div>
      <div class="col-1 d-flex align-items-center justify-content-center">
        <input type="checkbox" @change="changeStatus(index)" />
      </div>

      <!-- <div> <span @click="changeStatus(index)" >{{task.status}}</span></div> -->
    </div>
    <!-- CAJITA DONDE INTRODUCIR LA NUEVA TAREA CON SU BOTON SUBMIT -->

    <section class="row flex-column py-4 px-5 rounded-2" id="newTask">
      <input v-model="task" type=" text" placeholder=" Add new task" class="col-8 form-control rounded-2 mb-1" />
      <input v-model="description" type=" textarea" placeholder=" Please specify the task" class="col-8 form-control rounded-2 mb-3" />
      <button @click="submitTask" class="btn btn-primary rounded-2 btn-sm">
        + SUBMIT
      </button>
    </section>

    <!--CAJITA PARA FILTRAR MOSTRAR TAREAS NO COMPLETADAS-->
    <!-- <div class="container mt-2 " id="tareas-no-completadas"> 
        <input class="rounded mr-1 text-center border-info" type="search" placeholder="Search" />
        <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" />  </span>
        </div> -->

    <!-- CAJITA QUE TE DICE SI HAY MÁS DE TRES CAJAS  new!-->

    <!-- <span> {{numberTask}}</span> -->

    <!-- TASK TABLE -->
    <!-- Conceptos utilizados:  **v-for**  **:key**  **{{}}**-->
  </div>

</template>

<script>
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "HelloWorld",
  props: {
    wordToSearch: String,
  },

  data() {
    return {
      task: "",
      taskStatus: ["to-do", "finished"],
      idforTask: 3,

      tasks: [
        {
          id: 0,
          name: "title task 1",
          description: " description task 1 ",
          status: "to-do",
          completed: false,
          editingName: false,
          editingDescription: false,
        },

        {
          id: 1,
          name: "title task 2",
          description: " description task 2 ",
          status: "to-do",
          completed: false,
          editingName: false,
          editingDescription: false,
        },
      ],
    };
  },
  computed: {
    filteredList() {
      return this.tasks.filter((post) => {
        return (
          post.name.toLowerCase().includes(this.wordToSearch.toLowerCase()) ||
          post.description.toLowerCase().includes(this.wordToSearch.toLowerCase())
        );
      });
    },
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
        status: "to-do",
        completed: false,
        editingName: false,
        editingDescription: false,
      });

      // when we add the new task the  input should be empty, the same with the imput description
      this.task = "";
      this.description = "";

      //We also want to increase the id
      this.idforTask++;
    },

    //DELETE THE TASK

    deleteTask(index) {
      console.log(index);
      document
        .getElementById("task" + String(index))
        .classList.add("deletedTaskActive");
      setTimeout(() => this.tasks.splice(index, 1), 1500);
    },

    editTask(task, tipos) {
      if (tipos === "description") {
        task.editingDescription = true;
      } else {
        task.editingName = true;
      }
    },

    //stopEditing

    finishEdit(event, index, tipos) {
      if (tipos === "description") {
        this.tasks[index][tipos] = event.srcElement.value;
        this.tasks[index].editingDescription = false;
      } else {
        this.tasks[index][tipos] = event.srcElement.value;
        this.tasks[index].editingName = false;
      }
    },

    changeStatus(index) {
      this.tasks[index].status = !this.tasks[index].status;
    },
  },
};
</script>

<style>

.deleteIcon {
  display: inline-block;
  transition: all 0.5s ease-in-out;
}

.deleteIcon:hover {
  cursor: pointer;
  transform: scale(1.2) rotate(0.5turn);
}

.deletedTask {
  transition: all 1s ease-in;
}

.deletedTaskActive {
  transform: scale(0);
}

#newTask {
  background-color: rgba(90,34,139,0.3);
}

.checkbox-size {
  width: 20px;
  height: 20px;
}

.description {
  position: relative;

  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

.icons {
  transition: 0.1s;
  left: 250px;
  cursor: pointer;
}

.icons:hover {
  font-size: 20px;
  filter: brightness(200%);
}
</style>
