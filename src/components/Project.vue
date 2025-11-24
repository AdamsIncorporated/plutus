<script setup lang="ts">
interface Descriptions {
  name: string;
  description: string;
}

const descriptions: Descriptions[] = [
  { name: "Agora SEC", descriptions: "test" },
  { name: "Agora FINRA", descriptions: "test" },
  { name: "Agora Yahoo", descriptions: "test" },
  { name: "test", descriptions: "test" },
  { name: "test", descriptions: "test" },
  { name: "test", descriptions: "test" },
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
