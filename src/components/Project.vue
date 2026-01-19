<script setup lang="ts">
interface Descriptions {
  name: string;
  description: string;
  url: string;
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
    url: "https://github.com/AdamsIncorporated/agora_yahoo",
  },
];
</script>

<template id="Projects">
  <section>
    <h2 class="section-title">Projects</h2>
  </section>
  <div class="three-col-grid">
    <a
      v-for="description in descriptions"
      :key="description.name"
      :href="description.url"
      target="_blank"
      rel="noopener noreferrer"
      class="item item-link"
    >
      <div class="item-title">{{ description.name }}</div>
      <div class="item-description">{{ description.description }}</div>
    </a>
  </div>
</template>
