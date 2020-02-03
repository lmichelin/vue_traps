<template>
  <div>
    Marks:
    <input
      v-for="mark in marks"
      :key="mark.id"
      :ref="`input_${mark.id}`"
      v-model="mark.value"
      :placeholder="mark.id"
      type="number"
      required
      min="0"
      max="20"
      @change="checkNumber(mark.id)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      marks: [
        { id: "MATHS1", value: null },
        { id: "PHYS1", value: 15 },
        { id: "MATHS2", value: 12 }
      ]
    };
  },
  methods: {
    checkNumber(id) {
      this.$refs[`input_${id}`].reportValidity();
    }
  }
};
</script>
