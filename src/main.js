import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "./utils/Toast";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Import Bootstrap and your custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/styles/main.css";

const app = createApp(App);

// Configure Vuetify
const vuetify = createVuetify({
  components,
  directives,
  // No styles are applied
});

// Attach Toast to global properties
app.config.globalProperties.$toast = Toast;

app.use(router).use(vuetify).mount("#app");