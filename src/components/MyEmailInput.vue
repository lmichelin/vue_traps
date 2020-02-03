<template>
  <input
    :class="{ isValid }"
    class="input"
    type="email"
    required
    placeholder="enter email"
    @input="isValid = $event.target.checkValidity()"
  />
</template>

<script>
export default {
  data() {
    return {
      isValid: false
    };
  }
};
</script>

<style scoped>
.input {
  border-radius: 2px;
  border: 1px solid red;
  outline-color: red;
}

.isValid {
  border-color: green;
  outline-color: green;
}

.input::placeholder {
  font-style: italic;
}
</style>
