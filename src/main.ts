import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Grid from "./components/Grid.vue";
import Welcome from "./components/Welcome.vue";
import Resume from "./components/Resume.vue";
import Project from "./components/Project.vue";

const app = createApp(App);
app
  .component("Grid", Grid)
  .component("Welcome", Welcome)
  .component("Resume", Resume)
  .component("Project", Project);
app.mount("#app");
