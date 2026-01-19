<template>
  <div class="header-container">
    <div class="welcome">
      <span>{{ displayed }}</span>
    </div>
  </div>
  <img :src="Profile" alt="Profile" class="profile"/>
  <div class="quote">“An investment in knowledge pays the best interest.”
— Benjamin Franklin</div>
</template>

<script lang="ts">
import Profile from "@/assets/img/profile.png";

export default {
  props: {
    text: { type: String, required: true },
    speed: { type: Number, default: 80 },
  },
  data() {
    return {
      displayed: "",
      Profile, // expose the image
    };
  },
  mounted() {
    let i = 0;
    const interval = setInterval(() => {
      this.displayed += this.text[i];
      i++;
      if (i >= this.text.length) clearInterval(interval);
    }, this.speed);
  },
};
</script>
