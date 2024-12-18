<template>
  <v-app>
    <Navbar v-if="!$route.meta.hideNavAndFooter" />
    <v-main>
      <div class="container">
        <div class="row position-relative overflow-hidden d-flex min-vh-100 justify-items-center align-items-center">
          <router-view />
        </div>
      </div>
    </v-main>
    <Footer v-if="!$route.meta.hideNavAndFooter" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
