<template>
  <nav class="navbar navbar-expand-md p-4">
    <div class="container-fluid">
      <router-link class="navbar-brand fst-italic fs-6" to="/">JJ Reads</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <div class="d-flex gap-2">
          <router-link v-if="!isLoggedIn" to="/login" class="btn btn-light w-100">Login</router-link>
          <router-link v-if="!isLoggedIn" to="/register" class="btn btn-light w-100">Register</router-link>
          <router-link v-if="isLoggedIn" to="/dashboard" class="btn btn-light w-100">Dashboard</router-link>
          <router-link v-if="isLoggedIn" to="/" @click="logout" class="btn btn-light w-100">Logout</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Auth from "../api/Auth.js";
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  name: "navigation-bar",
  created() {
    this.isLoggedIn = Object.keys(Auth.currentUser).length !== 0;
  },
  methods: {
    logout() {
      Auth.logout();
      this.$toast.success("You have been logged out.");
    },
  }
};
</script>

<style scoped>
.navbar-brand {
  font-family: "Playwrite ID Guides", cursive;
}
</style>
