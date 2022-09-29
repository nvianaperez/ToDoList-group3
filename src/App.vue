<template>
  <div id="app">
  <todo-app></todo-app>
</div>
</template>
<script>
  import TodoApp from './components/TodoApp.vue'
  export default {
    name: 'App',
    components: {
      TodoApp
    }
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
</script>

<template>
  <main>
    <section id="search-filter">
      <input type="search" placeholder="Search" />
    </section>
    <section id="tasks-container">
      <ul>
        <li v-for="item in tasks">
          <div>
            <div>
              <input v-model="item.title" disabled="true" />
              <input v-model="item.description" disabled="true" />
            </div>
            <div>
              <input type="checkbox" />
              <button @click="">Delete</button>
              <button @click="">Edit</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section id="new-task"></section>
  </main>

  <div>
    <label>
      <input v-model="title" type="text" placeholder="Title" />
    </label>
    <label>
      <input type="textarea" placeholder="Please specify the task" />
    </label>
    <button @click="addTask">+</button>
  </div>
</template>

<style>

main {
  background-color: #60105030;
}

</style> -->
