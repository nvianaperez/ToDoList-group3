import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),

  getters: {
    filterByText: (state) => {
      return (word) => {
        console.log(word);
        return state.tasks.filter(
          (task) =>
            task.text.toLowerCase().includes(word.toLowerCase()) ||
            task.description.toLowerCase().includes(word.toLowerCase())
        );
      };
    },
  },
  actions: {
    async getTodos() {
      try {
        const res = await fetch(
          'https://todos-mpwar.herokuapp.com/users/aleh/todos'
        );
        const data = await res.json();
        this.tasks = data;
      } catch (error) {
        console.log(error);
      }
    },
    changeStatusTask: (state) => {
      return (id) =>
        state.tasks.find((task) => {
          console.log(id)(task.id === id) ? (task.status = !task.status) : null;
        });
    },
    async patchTask(data) {
      console.log(data);
      const { id } = data;
      const url = `https://todos-mpwar.herokuapp.com/users/aleh/todos/${id}`;
      const body = JSON.stringify(data);
      try {
        const res = await fetch(url, {
          method: 'PATCH',
          body,

          headers: {
            'Content-type': 'application/json',
            Accept: '*/*',
          },
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
