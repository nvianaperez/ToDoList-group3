<script>
export default {
  props: {
    wordToSearch: String,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div class="container px-5 py-2">
    <RouterView :wordToSearch="wordToSearch"> </RouterView>
  </div>
</template>

<style>
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
