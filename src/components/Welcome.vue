<template id="Welcome">
  <span>{{ displayed }}</span>
</template>

<script lang="ts">
export default {
  props: {
    text: { type: String, required: true },
    speed: { type: Number, default: 80 }, // ms per letter
  },
  data() {
    return {
      displayed: "",
    };
  },
  mounted() {
    let i = 0;
    const interval = setInterval(() => {
      this.displayed += this.text[i];
      i++;
      if (i >= this.text.length) {
        clearInterval(interval);
      }
    }, this.speed);
  },
};
</script>