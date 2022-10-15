<script>
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'form',

  data() {
    return {
      task: '',
      taskStatus: ['to-do', 'finished'],
      idforTask: 3,
    };
  },

  methods: {
    createTask() {
      if (this.task.length === 0) return;

      const newTask = {
        name: this.task,
        description: this.description,
        status: 'to-do',
        completed: false,
        editingName: false,
        editingDescription: false,
      };

      // Dispatch Action for new Task
    },
  },
};
</script>
<template>
  <section class="row flex-column py-4 px-5" id="newTask">
    <input
      v-model="task"
      type=" text"
      placeholder=" Add new task"
      class="col-8 form-control"
    />
    <input
      v-model="description"
      type=" textarea"
      placeholder=" Please specify the task"
      class="col-8 form-control"
    />
    <button @click="createTask" class="btn btn-primary rounded-0 btn-sm">
      + SUBMIT
    </button>
  </section>
</template>
<style>
#newTask {
  background-color: #5d68b1;
}
</style>
