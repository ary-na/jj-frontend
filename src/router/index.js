import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import About from "../pages/About.vue";
import Dashboard from "../pages/Dashboard.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue"; // Import your 404 page component

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { hideNavAndFooter: true },
  },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { hideNavAndFooter: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("accessToken"); // Replace with your auth logic

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: "NotFound" }); // Navigate to 404 if not logged in
  } else {
    next(); // Allow navigation
  }
});

export default router;
