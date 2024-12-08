<script setup>
import { ref, onMounted } from "vue";

const status = ref("pending");
const name = ref("Abnet");
const tasks = ref(["task 1", "task 2", "task 3"]);
const newTask = ref("");
const togleStatus = () => {
  if (status.value == "active") {
    status.value = "pending";
  } else if (status.value == "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const handleSubmit = () => {
  if (newTask.value.trim() != "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();
    tasks.value = tasks.value.concat(
      data.slice(0, 10).map((task) => task.title)
    );
  } catch (error) {}
});
</script>

<template>
  <!-- {{  }} we call this interpolation -->
  <h1>Hello, {{ name }} Welcome to vue play</h1>
  <p v-if="status == 'active'">{{ name }} is online</p>
  <p v-else-if="status == 'pending'">{{ name }} is pending</p>
  <p v-else>{{ name }} is offline</p>

  <h1>List of Tasks</h1>

  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      {{ task }}<span @click="deleteTask(index)">Delete</span>
    </li>
  </ul>

  <a v-bind:href="link"> Abnet's portfolio</a>

  <!-- <button v-on:click="togleStatus"> click</button> -->
  <button @click="togleStatus">click</button>

  <form @submit.prevent="handleSubmit">
    <label for="task">add task</label>

    <input type="text" id="task" name="task" v-model="newTask" />

    <button type="submit">add task</button>
  </form>
</template>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
