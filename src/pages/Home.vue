<script>
import TodoApp from '../components/TodoApp.vue';
import Searcher from '../components/searcher.vue';

export default {
  data() {
    return {
      wordToSearch: '',
    };
  },
  components: {
    TodoApp,
    Searcher,
  },
  methods: {
    onSearchByWord(value) {
      console.log('valor emitido desde componente hijo:', value);
      this.wordToSearch = value;
    },
  },
};
</script>
<template>
  <div class="container px-5 py-2">
    <header class="bg-info rounded">
      <h2 class="text-start p-4" id="header">
        Todo App
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </h2>
    </header>

    <section class="mt-2 mb-4">
      <div class="">
        <nav
          class="d-flex flex-row justify-content-between navbar navbar-expand-lg navbar-white bg-secondary bg-gradient rounded"
        >
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item navbar-brand">
                  <router-link to="/" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item navbar-brand">
                  <router-link to="/about-us" class="nav-link active"
                    >About us</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <Searcher @emitInput="onSearchByWord($event)" />
        </nav>
      </div>
    </section>
    <TodoApp class="rest" :wordToSearch="wordToSearch" />
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
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.rest {
  flex: 1;
}

header {
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: grey;
}
</style>
