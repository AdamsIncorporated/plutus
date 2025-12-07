<script setup lang="ts">
interface Descriptions {
  name: string;
  description: string;
}

const descriptions: Descriptions[] = [
  { name: "Agora SEC", description: "test" },
  { name: "Agora FINRA", description: "test" },
  { name: "Agora Yahoo", description: "test" },
  { name: "test", description: "test" },
  { name: "test", description: "test" },
  { name: "test", description: "test" },
];
</script>

<template id="Projects">
  <div class="two-col-grid">
    <div
      v-for="description in descriptions"
      :key="description.name"
      class="item"
    >
      {{ description.name }}
    </div>
  </div>
</template>
