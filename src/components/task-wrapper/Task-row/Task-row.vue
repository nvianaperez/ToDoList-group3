<script>
import { useTasksStore } from '../../../store/useTasksStore';

export default {
  setup() {
    const tasksStore = useTasksStore();
    return { tasksStore };
  },
  props: ['task'],
  data() {
    return {
      text: null,
      description: null,
      editingDescription: false,
      editingText: false,
    };
  },
  methods: {
    //DELETE THE TASK

    startEditDescription() {
      this.editingDescription = true;
    },
    startEditText() {
      this.editingText = true;
    },

    editTask(event) {
      const id = this.task.id;

      if (event.target.id === 'input-description') {
        const description = event.srcElement.value;
        this.editingDescription = false;

        this.$emit('patchEvent', { id, description });
      }
      if (event.target.id === 'input-text') {
        const text = event.srcElement.value;
        this.editingText = false;
        this.$emit('patchEvent', { id, text });
      }
      if (event.target.id === 'input-completed') {
        const completed = !this.task.completed;

        this.$emit('patchEvent', { id, completed });
      }
    },
    deleteTask(id) {
      document
        .getElementById('task' + String(id))
        .classList.add('deletedTaskActive');
      setTimeout(() => this.$emit('deleteEvent', { id }), 1500);
    },

    //stopEditing
  },
};
</script>
<template>
  <div
    :id="'task' + task.id"
    class="deletedTask-action transition row mb-2 py-2 rounded task-container"
    :style="{ backgroundColor: !task.completed ? '#6ad86a42' : '#ff6d534d' }"
  >
    <!-- V-IF V-ELSE  if task editing is false ( we are not editing), show the task into the span, else, show the imput)-->
    <div class="col-1">
      <div class="text-primary text-center" @click.capture="editTask(task)">
        <font-awesome-icon icon="fa-solid fa-pencil" />
      </div>
      <div class="text-center" @click.capture="deleteTask(task.id)">
        <span class="deleteIcon text-danger">X</span>
      </div>
    </div>
    <!--This'll inject our task.text in our html-->
    <div class="col-10">
      <div class="" @click="startEditText()">
        <span class="text-primary fs-4 col-9 description" v-if="!editingText"
          >{{ task.text }}
        </span>
        <input
          id="input-text"
          class="form-control rounded text-primary fs-4 col-9 description description-editing"
          v-else
          type="text"
          v-model="task.text"
          @keyup.enter="editTask($event)"
          @blur="editTask($event)"
        />
      </div>
      <div
        class="text-secondary fs-6 description col-9"
        v-if="!editingDescription"
        @click="startEditDescription()"
      >
        {{ task.description }}
      </div>
      <input
        v-else
        class="form-control rounded"
        id="input-description"
        type="text"
        v-model="task.description"
        @keyup.enter="editTask($event)"
        @blur="editTask($event)"
      />
    </div>
    <div class="col-1 d-flex align-items-center justify-content-center">
      <input
        type="checkbox"
        id="input-completed"
        value="task.completed"
        v-model="task.completed"
        @click="editTask($event)"
      />
    </div>

    <!-- <div> <span @click="changeStatus(index)" >{{task.status}}</span></div> -->
  </div>
</template>
<style>
.form-control {
  border: none !important;
  background-color: transparent !important;
  max-height: 36px;
}
.task-container {
  min-height: 86px;
}
</style>
