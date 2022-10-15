import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
    ],
  }),
  
  getters: {
   filterByText: (state) => {
    return (word) => {
      console.log(word)
      return state.tasks.filter(task => task.text.includes(word) || task.description.includes(word) ) 
    }
   },
   
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
    changeStatusTask: (state) => {
      return (id) => state.tasks.find(task => {
        console.log(id)
        (task.id === id) ? task.status = !task.status : null
      })
     }
  },
  
});
