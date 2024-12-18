import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import About from "../pages/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login, meta: {hideNavAndFooter: true} },
  { path: "/about", name: "About", component: About },
  { path: "/register", name: "Register", component: Register, meta: {hideNavAndFooter: true} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Export the router instance