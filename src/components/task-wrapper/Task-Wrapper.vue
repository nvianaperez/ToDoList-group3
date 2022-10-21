<script>
import TaskRow from './Task-row/Task-row.vue';
import { useTasksStore } from '../../store/useTasksStore';

export default {
  components: {
    TaskRow,
  },
  props: {
    wordToSearch: String,
  },
  setup() {
    const tasksStore = useTasksStore();
    console.log(tasksStore.filterByText);
    return { tasksStore, filter: tasksStore.filterByText };
  },
  data() {
    return {
      tasks: this.tasksStore.tasks,
      taskToEdit: null,
    };
  },
  methods: {
    patchTask(task) {
      console.log(task);
      this.tasksStore.patchTask(task);
    },
    deleteTask(id) {
      if (!id) return;
      console.log(id);
      this.tasksStore.deleteTask(id);
    },
  },
  computed: {
    filteredList() {
      return this.tasks.filter((post) => {
        return post.text
          .toLowerCase()
          .includes(this.wordToSearch.toLowerCase());
      });
    },
  },

  created() {
    this.tasksStore.getTodos();
  },
  mounted() {
    this.tasks = this.filteredList;
  },
};
</script>

<template>
  <!-- VFOR  We can use to render a list of items based on an array// 
     for loop //The key attribute tells Vue how your data relates to the HTML elements
     it's rendering to the screen. When your data changes, Vue uses these keys to know which HTML elements
     to remove or update, and if it needs to create any new ones. -->

  <TaskRow
    v-for="task in tasksStore.filterByText(wordToSearch)"
    :key="task.id"
    v-bind:task="task"
    @patchEvent="patchTask($event)"
    @deleteEvent="deleteTask($event)"
  ></TaskRow>
</template>
<style></style>
