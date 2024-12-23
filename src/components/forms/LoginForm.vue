<template>
  <form @submit.prevent="handleSubmit" novalidate>
    <h1 class="mb-3 fs-4">Welcome back!</h1>
    <p class="mb-3 text-muted">Please Login to continue.</p>
    <InputField
      label="Email"
      id="email"
      type="email"
      v-model="email"
      placeholder="Enter your email."
      :validationMessage="validationErrors.email"
    />
    <InputField
      label="Password"
      id="password"
      type="password"
      v-model="password"
      placeholder="Enter your password."
      :validationMessage="validationErrors.password"
    />
    <div class="d-grid">
      <Button
        type="submit"
        class="btn-primary"
        :loading="loading"
        label="Login"
      ></Button>
    </div>
    <div class="d-flex align-items-center mb-3">
      <hr class="flex-grow-1" />
      <span class="mx-3 text-muted">Or sign in using</span>
      <hr class="flex-grow-1" />
    </div>
    <div class="d-flex gap-2 justify-content-center">
      <Button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-apple"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"
          />
          <path
            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"
          />
        </svg>
      </Button>
      <Button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-google"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
          />
        </svg>
      </Button>
      <Button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-twitter-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
          />
        </svg>
      </Button>
    </div>
    <div class="text-center">
      <span
        >Don't have an account?
        <router-link class="link-underline-info" to="/register"
          >Register</router-link
        ></span
      >
    </div>
  </form>
</template>

<script>
import InputField from "../InputField.vue";
import Button from "../PrimaryButton.vue";
//import Auth from "../../api/Auth.js";
import { useRouter } from "vue-router";
import Validation from "../../utils/Validation";
import Toast from "../../utils/Toast";

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
      loading: false, // Track the loading state
      validationErrors: {
        email: "",
        password: "",
      },
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    validateForm() {
      const errors = Validation.validateLoginForm({
        email: this.email,
        password: this.password,
      });
      console.log("Validation Errors:", errors);
      this.validationErrors = errors;
      return Object.keys(errors).length === 0;
    },
    async handleSubmit() {
      this.loading = true; // Show the loading spinner

      // Validate the form first
      if (!this.validateForm()) {
        this.loading = false; // Hide the loading spinner if validation fails
        return; // Stop further execution if validation fails
      }

      try {
        // const userData = {
          // email: this.email,
          // password: this.password,
        // };

        // Call the register method
        // await Auth.login(userData);

        // Show success toast and navigate to the login page
        Toast.success("Account created successfully! Please log in.");
        this.router.push("/dashboard");
      } catch (error) {
        // Handle errors and show a toast
        const errorMessage = error.message || "Failed to create an account.";
        Toast.error(errorMessage);
        console.error("Registration error:", error);
      } finally {
        this.loading = false; // Hide the loading spinner
      }
    },
  },
};
</script>
