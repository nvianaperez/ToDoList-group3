<template>
  <v-app>
    <v-main>
      <div class="container app">
        <header class="d-flex flex-column border-0">
          <div class="bg-info rounded">
            <h2 class="text-start p-4" id="header">
              Todo App
              <font-awesome-icon icon="fa-solid fa-user-secret" />
            </h2>
          </div>
          <div class="mt-1">
            <MenuComponent @emitInput="onSearchByWord($event)" />
          </div>
        </header>
        <Home class="content" :wordToSearch="wordToSearch" />
        <Footer class="footer" />
      </div>
    </v-main>
  </v-app>
</template>
<script>
import Home from './pages/Home.vue';
import MenuComponent from './components/MenuComponent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Organize your day',

  components: { MenuComponent, Home, Footer },
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
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
