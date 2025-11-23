<script setup lang="ts">
import cLogo from "@/assets/logos/c.png";
import cppLogo from "@/assets/logos/c++.png";
import csharpLogo from "@/assets/logos/csharp.png";
import pythonLogo from "@/assets/logos/python.png";
import rustLogo from "@/assets/logos/rust.png";
import snowflakeLogo from "@/assets/logos/snowflake.png";
import tensorLogo from "@/assets/logos/tensor.png";

interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: "C", src: cLogo },
  { name: "C++", src: cppLogo },
  { name: "C#", src: csharpLogo },
  { name: "Python", src: pythonLogo },
  { name: "Rust", src: rustLogo },
  { name: "Snowflake", src: snowflakeLogo },
  { name: "Tensor", src: tensorLogo },
];
</script>

<template id="Grid">
  <div class="logo-grid-container grid-cols-3 gap-4">
    <div v-for="logo in logos" :key="logo.name" class="logo-item">
      <img
        :src="logo.src"
        :alt="logo.name"
        class="w-16 h-16 object-contain"
      />
    </div>
  </div>
</template>
