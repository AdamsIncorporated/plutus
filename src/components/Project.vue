<script setup lang="ts">
interface Descriptions {
  name: string;
  description: string;
  url: string; // add a URL field
}

const descriptions: Descriptions[] = [
  {
    name: "Agora SEC EDGAR",
    description:
      "An API wrapper to parse and collect data from SEC EDGAR written in Rust.",
    url: "https://github.com/AdamsIncorporated/agora_sec_edgar",
  },
  {
    name: "Agora FINRA",
    description:
      "An API wrapper to parse and collect data from FINRA written in Rust.",
    url: "https://github.com/AdamsIncorporated/agora_finra",
  },
  {
    name: "Agora Yahoo",
    description:
      "An API wrapper to parse and collect data from Yahoo Finance written in Rust.",
    url: "https://github.com/yourusername/agora-yahoo",
  },
];
</script>

<template id="Projects">
  <div class="two-col-grid">
    <div
      v-for="description in descriptions"
      :key="description.name"
      class="item"
    >
      <a
        :href="description.url"
        target="_blank"
        rel="noopener noreferrer"
        class="item-link"
      >
        {{ description.name }}
      </a>
      <div class="item-description">{{ description.description }}</div>
    </div>
  </div>
</template>
