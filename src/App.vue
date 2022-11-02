<template>
  <v-app>
    <v-main>
      <div class="container app">
        <div class="d-flex flex-column justify-content-start">
          <header class="d-flex flex-column  border-0">
            <div class="d-flex flex-nowrap justify-content-sm-between align-items-center rounded">
              <h2 class="d-none d-sm-block text-start p-4" id="header">
                Todo App Development
                <font-awesome-icon icon="fa-solid fa-user-secret" />
              </h2>
              <font-awesome-icon class="d-block d-sm-none px-4"  icon="fa-solid fa-user-secret" />
              <MenuComponent @emitInput="onSearchByWord($event)" />
            </div>
          </header>
          <TodoApp class="content" :wordToSearch="wordToSearch" />
        </div>
        <div>
          <Footer class="footer" />
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import TodoApp from './pages/TodoApp.vue';
import MenuComponent from './components/MenuComponent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Organize your day',

  components: { MenuComponent, TodoApp, Footer },
  data() {
    return {
      wordToSearch: '',
      oldWord: '',
    };
  },
  methods: {
    onSearchByWord(value) {
      this.wordToSearch = value;
    },
  },
};
</script>
<style>
.footer {
  position: relative !important;
  top: 200% !important;
  align-content: flex-end;
  max-height: 150px !important;
  background-color: #6D687A;
}
header {
  color: rgb(97, 74, 217);
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
