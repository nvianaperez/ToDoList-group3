<script>
export default {
  props: ['task'],

  methods: {
    //DELETE THE TASK

    deleteTask(index) {
      console.log(index);
      document
        .getElementById('task' + String(index))
        .classList.add('deletedTaskActive');
      setTimeout(() => this.tasks.splice(index, 1), 1500);
    },

    editTask(task, tipos) {
      if (tipos === 'description') {
        task.editingDescription = true;
      } else {
        task.editingName = true;
      }
    },

    //stopEditing

    finishEdit(event, index, tipos) {
      if (tipos === 'description') {
        this.tasks[index][tipos] = event.srcElement.value;
        this.tasks[index].editingDescription = false;
      } else {
        this.tasks[index][tipos] = event.srcElement.value;
        this.tasks[index].editingName = false;
      }
    },

    changeStatus(index) {
      this.tasks[index].status = !this.tasks[index].status;
    },
  },
};
</script>
<template>
  <div
    :id="'task' + task.id"
    class="deletedTask transition row mb-2 py-2 rounded"
    :style="{ backgroundColor: !task.status ? '#6ad86a42' : '#ff6d534d' }"
  >
    <!-- V-IF V-ELSE  if task editing is false ( we are not editing), show the task into the span, else, show the imput)-->
    <div class="col-1">
      <div class="text-primary text-center" @click.capture="editTask(index)">
        <font-awesome-icon icon="fa-solid fa-pencil" />
      </div>
      <div class="text-center" @click.capture="deleteTask(index)">
        <span class="deleteIcon text-danger">X</span>
      </div>
    </div>
    <!--This'll inject our task.name in our html-->
    <div class="col-10">
      <div class="">
        <span
          class="text-primary fs-4 col-9 description"
          v-if="!task.editingName"
          @dblclick="editTask(task, 'name')"
          >{{ task.name }}
        </span>
        <input
          v-else
          type="text"
          v-model="task.name"
          @keyup.enter="finishEdit($event, index, 'task')"
          @blur="finishEdit($event, index, 'task')"
        />
      </div>
      <div
        class="text-secondary fs-6 description col-9"
        v-if="!task.editingDescription"
        @dblclick="editTask(task, 'description')"
      >
        {{ task.description }}
      </div>
      <input
        v-else
        type="text"
        v-model="task.description"
        @keyup.enter="finishEdit($event, index, 'description')"
        @blur="finishEdit($event, index, 'description')"
      />
    </div>
    <div class="col-1 d-flex align-items-center justify-content-center">
      <input type="checkbox" @change="changeStatus(index)" />
    </div>

    <!-- <div> <span @click="changeStatus(index)" >{{task.status}}</span></div> -->
  </div>
</template>
<style></style>
