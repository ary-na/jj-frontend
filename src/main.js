import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// main.js or main.ts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/styles/main.css';

createApp(App).use(router).mount("#app");