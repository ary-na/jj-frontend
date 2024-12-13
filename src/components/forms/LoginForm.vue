<template>
    <form @submit.prevent="handleSubmit">
      <InputField
        label="Email"
        id="email"
        type="email"
        v-model="email"
        placeholder="Enter your email"
      />
      <InputField
        label="Password"
        id="password"
        type="password"
        v-model="password"
        placeholder="Enter your password"
      />
      <Button type="submit" variant="primary" label="Login"></Button>
      <span>Don't have an account? <a class="link-underline-info" href="#">Register</a></span>
    </form>
  </template>
  
  <script>
  import InputField from "./InputField.vue";
  import Button from "./Button.vue";
  
  export default {
    name: "LoginForm",
    components: {
      InputField,
      Button,
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleSubmit() {
        console.log(`Logging in with ${this.email} and ${this.password}`);
        // Add API logic here
      },
    },
  };
  </script>