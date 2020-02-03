<template>
  <div>
    <p>
      <button @click="addUserOnTop">Add user on top</button>
    </p>

    <p>Locker room: {{ total }} / 40</p>

    <table>
      <tr>
        <th>Arrival time</th>
        <th>Name</th>
        <th>Locker room</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ new Date(user.timestamp).toLocaleString() }}</td>
        <td>
          <input v-model="user.name" placeholder="name" />
        </td>
        <td>
          <input
            type="checkbox"
            @change="total += $event.target.checked ? 1 : -1"
          />
        </td>
      </tr>
    </table>

    <pre>[debug] this.users = {{ JSON.stringify(users, null, 2) }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      users: []
    };
  },
  methods: {
    addUserOnTop() {
      this.users.unshift({ timestamp: +new Date(), name: "", email: "" });
    }
  }
};
</script>

<style scoped>
table {
  margin: 0 auto;
}
pre {
  text-align: left;
}
</style>
