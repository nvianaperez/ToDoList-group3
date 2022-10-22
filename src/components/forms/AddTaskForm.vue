<script>
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';
import { useTasksStore } from '../../store/useTasksStore';
export default {
  name: 'form',

  setup() {
    const tasksStore = useTasksStore();

    return { tasksStore };
  },
  data() {
    return {
      task: '',
      description: '',
      taskTags: ['High priority', 'Medium priority', 'Low Priority'],
      showUpdateDescription: false,
    };
  },

  methods: {
    createTask() {
      // Dispatch Action for new Task
      this.tasksStore.createTask(this.task);
      this.showUpdateDescription = true;
    },
    createDescription() {
      const id = this.tasksStore.getLastTaskId;
      console.log(id);
      this.tasksStore.patchTask({ id, description: this.description });
      this.$emit('closeForm', false);
    },
  },
};
</script>
<template>
  <section class="row flex-column mt-5 py-4 px-5 rounded-2" id="newTask">
    <input
      v-model="task"
      type=" text"
      placeholder=" Add new task"
      class="col-8 form-control mb-2"
      v-if="showUpdateDescription === false"
    />
    <input
      v-model="description"
      type=" textarea"
      placeholder=" Please specify the task"
      class="col-8 form-control mb-2"
      v-else="showUpdateDescription === true"
    />
    <div class="d-flex flex-row justify-content-end">
      <v-btn
        class="col-2 m-2"
        v-if="!showUpdateDescription"
        color="blue"
        text
        placeholder=" Please add a description to the task"
        @click="createTask()"
      >
        Add Task
      </v-btn>
      <v-btn
        class="col-2 m-2"
        v-if="showUpdateDescription"
        color="blue"
        text
        @click="createDescription()"
      >
        Add description
      </v-btn>
      <slot> </slot>
    </div>

    <!-- <button @click="createTask" class="btn btn-primary rounded-2 btn-sm">
      + SUBMIT
    </button> -->
  </section>
</template>
<style>
/* #newTask {
  background-color: rgba(91, 91, 214, 0.4);
} */
</style>
