<template>
  <div>
    <input
      placeholder="enter name"
      @change="inputValue = $event.target.value"
    />
    <p>Voici votre nom: {{ inputValue }}</p>
    <MyEmailInput @change="customInputValue = $event.target.value" />
    <p>Voici votre email: {{ customInputValue }}</p>
  </div>
</template>

<script>
import MyEmailInput from "@/components/MyEmailInput.vue";

export default {
  components: { MyEmailInput },
  data() {
    return {
      inputValue: "",
      customInputValue: ""
    };
  }
};
</script>
