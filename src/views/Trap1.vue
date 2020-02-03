<template>
  <div>
    Marks: {{ marks.map(mark => mark.value).join(",") }}
    <br />
    Average: {{ average.toFixed(2) }}
    <button @click="computeAverage">Compute</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marks: [
        { id: "MATHS1", value: 17 },
        { id: "PHYS1", value: 15 },
        { id: "MATHS2", value: 12 }
      ],
      average: 0
    };
  },
  methods: {
    computeAverage() {
      this.average = 0;
      this.marks.forEach(function(mark) {
        this.average += mark.value;
      });
      this.average /= this.marks.length;
    }
  }
};
</script>
