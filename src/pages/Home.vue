<script>
import TodoApp from "../components/TodoApp.vue";
import Searcher from "../components/searcher.vue";

export default {
  data() {
    return {
      wordToSearch: "",
    };
  },
  components: {
    TodoApp,
    Searcher,
  },
  methods: {
    onSearchByWord(value) {
      console.log("valor emitido desde componente hijo:", value);
      this.wordToSearch = value;
    },
  },
};
</script>
<template>
  <div class="container-wraper">
    <div class="container px-5 py-5">
      <header>
        <h2 class="text-center mb-5" id="header">
          Vue TODO APP- GROUP 3
          <font-awesome-icon icon="fa-solid fa-user-secret" />
        </h2>
      </header>

      <section class="container mt-5 mb-5">
        <div class="row justify-content-between">
          <Searcher @emitInput="onSearchByWord($event)" />
        </div>
      </section>
      <TodoApp :wordToSearch="wordToSearch" />
    </div>
  </div>
</template>

<style>
/* .container-wraper:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBlptX2PylaHNKw1GqXoIoui6gIzZJ1TeMA&usqp=CAU") center / cover;
  opacity: 0.1;
} */

.container {
  background-color: white;
}

header {
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: grey;
}
</style>
