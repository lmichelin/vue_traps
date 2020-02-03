<template>
  <div>
    <p>userId: <input type="number" v-model="inputId" /></p>
    <p>userName: <input type="text" v-model="inputName" /></p>
    <p>
      <button @click="addUser">Add/Edit User</button>
    </p>
    <table class="table">
      <tr>
        <th>userId</th>
        <th>userName</th>
      </tr>
      <tr :key="id" v-for="(name, id) in users">
        <td>{{ id }}</td>
        <td>{{ name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputId: 1,
      inputName: "",
      users: {
        1: "Bob",
        3: "Alice"
      }
    };
  },
  methods: {
    addUser() {
      this.users[this.inputId] = this.inputName;
    }
  }
};
</script>

<style scoped>
.table {
  margin: 0 auto;
}
</style>
