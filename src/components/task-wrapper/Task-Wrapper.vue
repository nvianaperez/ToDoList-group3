<script>
import TaskRow from './Task-row/Task-row.vue';
export default {
  components: {
    TaskRow,
  },
  data() {
    return {
      tasks: [
        {
          id: 0,
          name: 'title task 1',
          description: ' description task 1 ',
          status: 'to-do',
          completed: false,
          editingName: false,
          editingDescription: false,
        },

        {
          id: 1,
          name: 'title task 2',
          description: ' description task 2 ',
          status: 'to-do',
          completed: false,
          editingName: false,
          editingDescription: false,
        },
      ],
    };
  },
};
</script>

<template>
  <!-- VFOR  We can use to render a list of items based on an array// 
     for loop //The key attribute tells Vue how your data relates to the HTML elements
     it's rendering to the screen. When your data changes, Vue uses these keys to know which HTML elements
     to remove or update, and if it needs to create any new ones. -->

  <TaskRow
    v-for="(task, index) in tasks"
    :key="task.id"
    v-bind:task="task"
  ></TaskRow>
</template>
<style></style>
