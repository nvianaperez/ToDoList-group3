<script>
import TodoApp from '../components/TodoApp.vue';
import Searcher from '../components/searcher.vue';
// import MenuComponent from '../components/MenuComponent.vue';

export default {
  props: {
    wordToSearch: String,
  },
  data() {
    return {};
  },
  components: {
    TodoApp,
    Searcher,
  },
};
</script>
<template>
  <div class="container px-5 py-2">
    <RouterView :wordToSearch="wordToSearch"> </RouterView>
    <!-- <TodoApp class="rest" :wordToSearch="wordToSearch" /> -->
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
