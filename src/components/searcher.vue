<script>
export default {
  
  data() {
    return { inputSearch: "" };
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
  <div class="col-4 mt-2 d-flex justify-content-end" id="search-filter">
    <input
      class="rounded mr-1 text-center border-info"
      type="search"
      v-model="inputSearch"
      placeholder="Search"
    />
    <span>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </span>
  </div>
</template>
 
 