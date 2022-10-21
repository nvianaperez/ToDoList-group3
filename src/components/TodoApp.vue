<!--******************TEMPLATE***********************-->
<template>
  <div class="container">
    <!-- table content -->
    <TaskWrapper :wordToSearch="wordToSearch"></TaskWrapper>

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
    <v-footer class="mt-5 rounded-1" color="grey darken-4" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="ml-2"
        >
          <router-link :to="link.href"> {{ link.label }} </router-link>

          <!-- <v-else>
            <a href="link.href"> {{ link.label }} </a> -->
        </v-btn>

        <!-- <v-btn color="white" text rounded class="ml-2">
          <router-link to="/about-us">{{ link }}</router-link>
        </v-btn> -->

        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>ToDo App- Grupo 3</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { useTasksStore } from "../store/useTasksStore";
import AddTaskForm from "../components/forms/AddTaskForm.vue";
import TaskWrapper from "./task-wrapper/Task-Wrapper.vue";

export default {
  components: {
    AddTaskForm,
    TaskWrapper,
  },
  props: {
    wordToSearch: String,
  },

  data() {
    return {
      links: [
        { label: "Home", isRouterLink: true, href: "/home" },
        { label: "About Us", isRouterLink: true, href: "/about-us" },
        {
          label: "GitHub",
          isRouterLink: false,
          href: "https://github.com/nvianaperez/ToDoList-group3",
        },
      ],
    };
  },

  // data: () => ({
  //   links: ["Home", "About Us", "GitHub"],
  // }),
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
  background-color: #5d68b1;
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
