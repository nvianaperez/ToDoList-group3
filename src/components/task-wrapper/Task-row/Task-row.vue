<script>
import { useTasksStore } from '../../../store/useTasksStore';
import moment from 'moment';

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
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY  hh:mm ');
      }
    },
    startEditDescription() {
      this.editingDescription = true;
    },
    startEditText() {
      this.editingText = true;
    },

    startEditing() {
      this.editingDescription = true;
      this.editingText = true;
      console.log(this.$refs);
      setTimeout(() => {
        this.$refs.inputtext.focus();
      }, 200);
      this.$refs.inputtext.focus();
      this.$refs.inputdescription.focus();
    },

    editTask(event) {
      const id = this.task.id;

      if (event.target.id === 'input-description') {
        const description = event.srcElement.value;
        this.editingDescription = false;
        this.$refs.inputdescription.blur();
        this.$emit('patchEvent', { id, description });
      }
      if (event.target.id === 'input-text') {
        const text = event.srcElement.value;
        this.editingText = false;
        this.$refs.inputtext.blur();
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
  mounted: function () {
    console.log(this.$refs);
    console.log(this.$refs);
  },
};
</script>
<template>
  <div
    :id="'task' + task.id"
    class="deletedTask-action transition row mb-2 py-2 rounded task-container"
    :style="{ backgroundColor: task.completed ? '#6ad86a42' : '#ff6d536d' }"
  >
    <!-- V-IF V-ELSE  if task editing is false ( we are not editing), show the task into the span, else, show the imput)-->
    <div class="col-1 d-flex flex-column justify-content-center">
      <div class="text-primary text-center" @click="startEditing()">
        <font-awesome-icon class="edit-icon" icon="fa-solid fa-pencil" />
      </div>
      <div class="text-center" @click.capture="deleteTask(task.id)">
        <span class="deleteIcon text-danger">X</span>
      </div>
    </div>
    <!--This'll inject our task.text in our html-->
    <div class="col-10">
      <div class="" @click="startEditText()">
        <span class="fs-4 col-9 description text-black" v-if="!editingText"
          >{{ task.text }}
        </span>
        <input
          id="input-text"
          class="form-control rounded text-black fs-4 col-9 description description-editing row-input"
          v-show="editingText"
          ref="inputtext"
          type="text"
          v-model="task.text"
          @keyup.enter="editTask($event)"
          @blur="editTask($event)"
        />
      </div>
      <div
        class="fs-6 description col-9 text-black"
        v-if="!editingDescription"
        @click="startEditDescription()"
      >
        {{ task.description }}
      </div>
      <input
        v-show="editingDescription"
        ref="inputdescription"
        class="form-control rounded row-input"
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
    <div class="col-12 date-wrapper d-flex justify-content-between">
      <div class="col-8 offset-1">
        <span class="d-flex flex-row align-items-center">
          <p class="font-monospace add-tag">+</p>
          <p class="font-monospace tags ml-1">#Tag</p>
          <p class="font-monospace tags ml-1">#Tag</p>
          <p class="font-monospace tags ml-1">#Tag</p>
        </span>
      </div>
      <p class="col-2 date font-monospace pr-4">
        Created {{ formatDate(task.createdAt) }}
      </p>
    </div>
  </div>
</template>
<style>
.row-input {
  border: none !important;
  background-color: transparent !important;
  max-height: 36px;
}
.task-container {
  height: 110px;
  max-height: 110px;
  transition: 1s;
}
.edit-icon {
  cursor: pointer;
  color: #000000;
}
.edit-icon:hover {
  width: 18px;
  height: 18px;
}
.date {
  color: gray;
  text-align: end;
  font-size: 10px;
}
.date-wrapper {
  height: 10px;
}
.tags {
  text-align: end;
  font-size: 10px;
  color: gray;
}
.add-tag {
  background-color: #6d687a;
  border-radius: 5px;
  color: white;
  padding: 0px 5px;
  cursor: pointer;
}
</style>
