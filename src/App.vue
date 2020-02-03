<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/trap1">Trap 1</router-link>
      |
      <router-link to="/trap2">Trap 2</router-link>
      |
      <router-link to="/trap3">Trap 3</router-link>
      |
      <router-link to="/trap4">Trap 4</router-link>
      |
      <router-link to="/trap5">Trap 5</router-link>
      |
      <router-link to="/trap6">Trap 6</router-link>
      |
      <router-link to="/trap6.1">Trap 6.1</router-link>
      |
      <router-link to="/trap7">Trap 7</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
