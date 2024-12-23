import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "./utils/Toast";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/main.css';

const app = createApp(App);

// Attach Toast to global properties
app.config.globalProperties.$toast = Toast;

app.use(router).mount("#app");