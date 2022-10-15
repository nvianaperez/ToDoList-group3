import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      // {
      //   id: 0,
      //   name: "title task 1",
      //   description: " description task 1 ",
      //   status: "to-do",
      //   completed: false,
      //   editingName: false,
      //   editingDescription: false,
      // },

      // {
      //   id: 1,
      //   name: "title task 2",
      //   description: " description task 2 ",
      //   status: "to-do",
      //   completed: false,
      //   editingName: false,
      //   editingDescription: false,
      // },
    ],
  }),
  getters: {
   
  },
  actions: {
    async getTodos() {
      try {
        const res = await fetch("https://todos-mpwar.herokuapp.com/users/aleh/todos")
        const data = await res.json()
        console.log("actions",data)
        this.tasks = [...this.tasks, ...data]
      } catch (error) {
        console.log(error);
      }
    },
  },
  
});
