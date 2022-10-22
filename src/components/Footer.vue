<template>
  <v-footer class="mt-5 rounded-1 footer" color="grey darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="ml-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>ToDo App- Grupo 3</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ['Home', 'About Us', 'GitHub', 'Linkedin', 'Contact Us'],
    dialog: false,
  }),
};
</script>
