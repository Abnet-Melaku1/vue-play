<script>
export default {
  data() {
    return {
      name: "Abnet",
      status: "pending",
      tasks: ["task1", "task2", "task3"],
      link: "https://abnetmelaku.com",
    };
  },
  methods: {
    togleStatus() {
      if (this.status == "active") {
        this.status = "pending";
      } else if (this.status == "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <!-- {{  }} we call this interpolation -->
  <h1>Hello, {{ name }} Welcome to vue play</h1>
  <p v-if="status == 'active'">{{ name }} is online</p>
  <p v-else-if="status == 'pending'">{{ name }} is pending</p>
  <p v-else>{{ name }} is offline</p>

  <h1>List of Tasks</h1>

  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a v-bind:href="link"> Abnet's portfolio</a>

  <!-- <button v-on:click="togleStatus"> click</button> -->
  <button @click="togleStatus">click</button>
</template>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
