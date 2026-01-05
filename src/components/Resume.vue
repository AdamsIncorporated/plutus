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

<style scoped>
.ticker-wrapper {
  overflow: hidden;
  width: 100%;
}

.ticker {
  display: flex;
  align-items: center;
}

.ticker-content {
  display: flex;
  animation: scroll 20s linear infinite;
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem; /* spacing between logos */
}

.logo-img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}

.logo-name {
  margin-top: 0.5rem;
  font-size: 0.875rem; /* 14px */
  text-align: center;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

<template>
  <div class="resume-container">
    <!-- Education -->
    <section>
      <h2 class="section-title">Education</h2>
      <ul class="list experience">
        <li>
          Master of Finance, MSQFE; McCoy School of Business; Texas State
          University
          <span class="date">8/2022 – 8/2024</span>
        </li>
        <li>
          Bachelor of Science, Finance; The University of Texas at Dallas
          <span class="date">8/2018 – 1/2021</span>
        </li>
      </ul>
    </section>

    <!-- Professional Experience -->
    <section>
      <h2 class="section-title">Professional Experience</h2>

      <div class="experience">
        <h3 class="job-title">Central Health – Austin, Texas</h3>
        <p class="role">Full-Stack Software Engineer | 9/2024 – present</p>
        <ul class="list">
          <li>
            Designed and implemented three comprehensive Snowflake
            multidimensional databases for financial data visualization...
          </li>
          <li>
            Built multiple Streamlit applications to streamline tax distribution
            management...
          </li>
          <li>
            Developed Budget-to-Actuals web app using React + Flask, deployed on
            Azure DevOps...
          </li>
          <li>Developed Debt Management database + TS React/Rust web app...</li>
        </ul>
      </div>

      <div class="experience">
        <h3 class="job-title">Texas Bond Review Board – Austin, Texas</h3>
        <p class="role">
          Financial Analyst & Full-Stack Software Engineer | 4/2023 – 9/2024
        </p>
        <ul class="list">
          <li>
            Crafted triggers, tables, and queries for MS SQL Server Database
          </li>
          <li>
            Built Flask & Django web apps for staff to visualize/edit database
          </li>
          <li>Created AWS S3 Pipelines, CI/CD Docker environments</li>
          <li>Developed NLP software to extract bond sentiment</li>
        </ul>
      </div>

      <div class="experience">
        <h3 class="job-title">
          Municipal Advisory Council of Texas – Austin, Texas
        </h3>
        <p class="role">Financial Analyst | 4/2022 – 11/2022</p>
        <ul class="list">
          <li>Fixed income, derivatives, and property analysis</li>
          <li>
            Produced Texas Municipal Reports for public finance municipal market
          </li>
          <li>
            Created C#/Razor MVC Web App for municipal bond property data
            pipeline
          </li>
        </ul>
      </div>
    </section>

    <!-- Technical Skills -->
    <section>
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-grid">
        <div class="ticker-wrapper">
          <div class="ticker">
            <!-- Repeat logos twice for seamless loop -->
            <div class="ticker-content">
              <div v-for="logo in logos" :key="logo.name" class="logo-item">
                <img :src="logo.src" :alt="logo.name" class="logo-img" />
                <p class="logo-name">{{ logo.name }}</p>
              </div>
              <div
                v-for="logo in logos"
                :key="'dup-' + logo.name"
                class="logo-item"
              >
                <img :src="logo.src" :alt="logo.name" class="logo-img" />
                <p class="logo-name">{{ logo.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Designations -->
    <section>
      <h2 class="section-title">Professional Designations</h2>
      <ul class="list experience">
        <li>Securities Industry Essentials (SIE)</li>
        <li>Series 63</li>
        <li>Passed CFA Level 1, Level 2 Candidate</li>
        <li>Psi Zeta Chi Phi Fraternity</li>
      </ul>
    </section>
  </div>
</template>
