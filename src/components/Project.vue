<script setup lang="ts">
interface Descriptions {
  name: string,
  description: string
}

const descriptions: Descriptions[] = [
  {name: "test", descriptions: "test"}

]
</script>

<template id="Projects">
  <div class="grid-cols-3 gap-4">
    <div
      v-for="description in descriptions"
      :key="description.name"
      class=""
    >
    {{description.name}}
  </div>
  </div>
</template>
