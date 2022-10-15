import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
    ],
  }),
  getters: {
   filterByText: (word) => word ? this.tasks.filter(task => task.text.includes(word)) : this.tasks
  },
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
