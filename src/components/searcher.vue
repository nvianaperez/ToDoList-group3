<script>
export default {
  data() {
    return { inputSearch: '' };
  },
  watch: {
    inputSearch(event) {
      this.checkContent(event);
    },
  },
  methods: {
    checkContent(event) {
      this.$emit('emitInput', event);
    },
  },
};
</script>
<!-- CAJITA PARA BUSCAR TAREAS-->
<template>
  <div
    class="col-12 col-md-4 col-lg-3 mt-2 d-flex justify-content-end"
    id="search-filter"
  >
    <input
      class="form-control rounded mr-1 text-center border-info"
      type="search"
      v-model="inputSearch"
      placeholder="Search"
    />
    <!-- <span> -->
    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
    <!-- </span> -->
  </div>
</template>
<style>
.icon {
  position: relative;
  right: 30px;
  top: 10px;
}
</style>
