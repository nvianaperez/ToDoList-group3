<script>
import TodoApp from "../components/TodoApp.vue";
import Exercices from "../components/Exercices.vue";
import Forms from "../components/forms.vue";
import Searcher from "../components/searcher.vue";
export default {
  data() {
    return {
        wordToSearch: ""
    }
  },
  components: {
    TodoApp,
    Exercices,
    Forms,
    Searcher,
  },
  methods: {
    onSearchByWord (value) {
        console.log("valor emitido desde componente hijo:", value)
        this.wordToSearch = value
    }
  },
    
  
};
</script>
<template>
  <div class="container py-5">
    <h2 class="text-center mb-5" id="header">
      Vue TODO APP- GROUP 3
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </h2>
    <section class="container mb-1">
      <div class="row justify-content-between">
        <div class="col-4">Filter</div>
        <Searcher @emitInput="onSearchByWord($event)"/>
      </div>
    </section>
    <TodoApp :wordToSearch="wordToSearch"/>
  </div>
</template>