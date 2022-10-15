import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
    state: () => (
       {
        tasks:  [
            {
              id: 0,
              name: "title task 1",
              description: " description task 1 ",
              status: "to-do",
              completed: false,
              editingName: false,
              editingDescription: false,
            },
    
            {
              id: 1,
              name: "title task 2",
              description: " description task 2 ",
              status: "to-do",
              completed: false,
              editingName: false,
              editingDescription: false,
            },
          ],
       }
    ),
    getters: {},
    actions: {}
})