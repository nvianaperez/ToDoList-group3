import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),

  getters: {
    filterByText: (state) => {
      console.log('state', state.tasks);
      return (word) => {
        return state.tasks.filter((task) => {
          return (
            task.text.toLowerCase().includes(word.toLowerCase()) ||
            task.description.toLowerCase().includes(word.toLowerCase())
          );
        });
      };
    },
    getLastTaskId: (state) => {
      const lastId = state.tasks[state.tasks.length - 1].id;
      console.log(lastId);
      return lastId;
    },
  },
  actions: {
    async getTodos() {
      try {
        const res = await fetch(
          'https://todos-mpwar.herokuapp.com/users/grupo3/todos'
        );
        const data = await res.json();
        console.log(data);
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
      const url = `https://todos-mpwar.herokuapp.com/users/grupo3/todos/${id}`;
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
        const i = this.tasks.findIndex((task) => task.id === id);
        this.tasks[i] = data;
      } catch (error) {
        console.log(error);
      }
    },
    async createTask(data) {
      const url = `https://todos-mpwar.herokuapp.com/users/grupo3/todos`;
      const body = JSON.stringify({ text: data });
      try {
        const res = await fetch(url, {
          method: 'POST',
          body,

          headers: {
            'Content-type': 'application/json',
            Accept: '*/*',
          },
        });
        const data = await res.json();
        this.tasks = [...this.tasks, data];
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask({ id }) {
      const url = `https://todos-mpwar.herokuapp.com/users/grupo3/todos/${id}`;
      try {
        const res = await fetch(url, {
          method: 'DELETE',
        });
        await res.json();
        this.tasks = this.tasks.filter((task) => task.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
