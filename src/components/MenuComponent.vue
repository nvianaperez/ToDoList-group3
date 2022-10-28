<template>
  <section class="">
    <div class="">
      <nav
        class="d-flex  justify-content-sm-between pr-5 flex-nowrap sm-w-100 navbar navbar-expand-lg navbar-white rounded"
      >
        <div class="mr-5">
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
          <div class="collapse navbar-collapse mr-5" id="navbarNav">
            <ul class="navbar-nav mt-3">
              <li class="nav-item px-2 ">
                <router-link to="/" class="active nav-options">Home</router-link>
              </li>
              <li class="nav-item px-2 ">
                <router-link to="/about-us" class="active nav-options"
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
<style >
.nav-options {
  color: rgb(97, 74, 217);
  font-weight: bold;
}
</style>