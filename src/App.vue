<template>
  <v-app>
    <Navbar />
    <!-- Router View for Routed Components -->
    <v-main>
      <div class="container">
        <div class="row d-flex vh-100 justify-items-center align-items-center">
          <router-view />
        </div>
      </div>
    </v-main>
    <Footer/>
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
