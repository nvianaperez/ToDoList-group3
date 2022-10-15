import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [    
    ],
  }),
  getters: {},
  actions: {
    async getTodos() {
      try {
        const res = await fetch("https://todos-mpwar.herokuapp.com/users/aleh/todos")
        const data = await res.json()
        this.tasks = data
      } catch (error) {
        console.log(error);
      }
    },
  },
  
});
