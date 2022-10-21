<template>
  <section class="mt-2 mb-4">
    <div class="">
      <nav
        class="d-flex flex-row justify-content-between navbar navbar-expand-lg navbar-white bg-info bg-gradient rounded"
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
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
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
</template>
<script>
import Searcher from '../components/searcher.vue';
export default {
  name: 'Menu',
  components: {
    Searcher,
  },
  methods: {
    onSearchByWord(event) {
      this.$emit('emitInput', event);
    },
  },
};
</script>
