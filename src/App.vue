<template>
  <main >
  <router-view />
</main>
</template>
<script>
 
  export default {
    name: 'App',
    
  }
</script>
<!-- <script>
export default {
  data() {
    return {
      title: "",
      tasks: [
        {
          title: "title task 1",
          description: "description task 1",
          isCompleted: false,
          isDeleted: false,
        },
        {
          title: "title task 2",
          description: "description task 2",
          isCompleted: false,
          isDeleted: false,
        },
      ],
    };
  },
  methods: {
    addTask(titleInput, descriptionInput) {},
  },
};
</script> -->

