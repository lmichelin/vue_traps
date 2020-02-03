<template>
  <div class="container">
    <p>hello!</p>
    <MyComponent class="big-font" />
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";

export default {
  components: { MyComponent }
};
</script>

<style scoped>
.container {
  border: 2px solid red;
}
.big-font {
  font-size: 30px;
}
</style>
