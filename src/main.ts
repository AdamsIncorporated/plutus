import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Welcome from "./components/Welcome.vue";
import Resume from "./components/Resume.vue";
import Project from "./components/Project.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);
app
  .component("Welcome", Welcome)
  .component("Resume", Resume)
  .component("Project", Project)
  .component("Footer", Footer);
app.mount("#app");
