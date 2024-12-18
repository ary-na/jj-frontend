<template>
  <footer class="p-3 text-center">
    <span class="small">
      &copy; {{ currentYear }} <div class="fst-italic">JJ Reads</div>. All rights reserved.
    </span>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
div {
  display: inline;
  font-family: "Playwrite ID Guides", cursive;
}
</style>