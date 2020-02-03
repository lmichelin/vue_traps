<template>
  <div>
    <button @click="showAndFocusInput">Show and focus input</button>
    <input v-if="showInput" ref="input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInput: false
    };
  },
  methods: {
    showAndFocusInput() {
      this.showInput = true;
      this.$refs.input.focus();
    }
  }
};
</script>
