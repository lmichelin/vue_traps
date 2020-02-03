<template>
  <div>
    <p>
      <input
        placeholder="enter number"
        ref="numberInput"
        type="number"
        max="10"
        @change="checkNumber"
      />
    </p>
    <p>
      <MyEmailInput ref="emailInput" @change.native="checkEmail" />
    </p>
  </div>
</template>

<script>
import MyEmailInput from "@/components/MyEmailInput.vue";

export default {
  components: { MyEmailInput },
  methods: {
    checkNumber() {
      this.$refs.numberInput.reportValidity();
    },
    checkEmail() {
      this.$refs.emailInput.reportValidity();
    }
  }
};
</script>
