import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Grid from "./components/Grid.vue";

const app = createApp(App)
app.component("Grid", Grid)
app.mount("#app");
