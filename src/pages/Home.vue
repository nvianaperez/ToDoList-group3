<!--******************TEMPLATE***********************-->
<template>
  <div class="wrapper">
    <!-- table content -->
    <TaskWrapper :wordToSearch="wordToSearch"></TaskWrapper>

    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="1000"
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            @click="dialog = true"
            class="mt-2"
            color="primary"
            dark
          >
            Add A Task
          </v-btn>
        </template>
        <AddTaskForm @closeForm="dialog = false">
          <v-btn class="col-2 m-2" color="white" text @click="dialog = false">
            Cancel
          </v-btn>
        </AddTaskForm>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';
import { useTasksStore } from '../store/useTasksStore';
import AddTaskForm from '../components/forms/AddTaskForm.vue';
import TaskWrapper from '../components/task-wrapper/Task-Wrapper.vue';

export default {
  components: {
    AddTaskForm,
    TaskWrapper,
  },
  props: {
    wordToSearch: String,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.deleteIcon {
  display: inline-block;
  transition: all 0.5s ease-in-out;
}
.deleteIcon:hover {
  cursor: pointer;
  transform: scale(1.2) rotate(0.5turn);
}
.deletedTask-action {
  transition: all 0.8s ease-in;
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
