<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3 col-md-6">Login</h1>
            <LoginForm class="col-md-6"/>
        </div>
    </div>
  </template>
  
  <script>
  import LoginForm from "../forms/LoginForm.vue";
  
  export default {
    name: "login-form",
    components: {
      LoginForm,
    },
  };
  </script>