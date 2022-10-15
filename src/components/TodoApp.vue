<!--******************TEMPLATE***********************-->
<template>
  <div class="container">
    <!-- table content -->
    <TaskWrapper></TaskWrapper>

    <AddTaskForm></AddTaskForm>
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
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';
import AddTaskForm from '../components/forms/AddTaskForm.vue';
import TaskWrapper from './task-wrapper/Task-Wrapper.vue';

export default {
  name: 'HelloWorld',
  props: {
    wordToSearch: String,
  },
  components: {
    AddTaskForm,
    TaskWrapper,
  },
  data() {},
  computed: {
    filteredList() {
      return this.tasks.filter((post) => {
        return (
          post.name.toLowerCase().includes(this.wordToSearch.toLowerCase()) ||
          post.description
            .toLowerCase()
            .includes(this.wordToSearch.toLowerCase())
        );
      });
    },
  },
};
</script>

<style>
.container:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBlptX2PylaHNKw1GqXoIoui6gIzZJ1TeMA&usqp=CAU')
    center / cover;
  opacity: 0.2;
  z-index: -1;
}

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
