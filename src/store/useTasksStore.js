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
      return state.tasks.filter(task => task.text.toLowerCase().includes(word.toLowerCase()) || task.description.toLowerCase().includes(word.toLowerCase()) ) 
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
      //buscar la tarea por ID
      //y luego cambiarle el estado

      return (id) => state.tasks.find(task => {
        console.log(id)
        (task.id === id) ? task.completed = !task.completed : null
      })
     }
  },
  
});
