<script>
export default {
  data() {
    return {
      name: '',
      error: null,
      success: false,
    };
  },
  methods: {
    checkForm() {
      if (this.name === '') {
        this.error = "Name can't be empty";
        this.success = false;

        return;
      }
      this.error = null;
      this.success = true;
    },
  },
};
</script>

<template>
  <form @submit.prevent="checkForm">
    <input type="text" v-model="name" placeholder="This is a name" />
    <button type="submit">Send form</button>
  </form>
  <br />
  <p v-if="error" class="error">{{ error }}</p>
  <p v-if="success" class="success">Name created correctly!</p>
</template>

<style>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
