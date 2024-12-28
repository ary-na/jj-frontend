import axios from "axios";

class Auth {
  constructor() {
    this.currentUser = {};
    this.apiBaseUrl =
      process.env.VUE_APP_API_BASE_URL ||
      "http://ec2-3-25-97-229.ap-southeast-2.compute.amazonaws.com:3000";
  }

  /**
   * Register a new user.
   * @param {Object} userData - The registration details (e.g., name, email, password).
   * @returns {Object} - The response from the API.
   */
  async register(userData) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/user`, userData);
      this.currentUser = response.data.user;
      return response.data;
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      throw error.response?.data || error;
    }
  }

  async login(userData) {
    try {
      const response = await axios.post(
        `${this.apiBaseUrl}/auth/login`,
        userData
      );
      this.currentUser = response.data.user;
      if (!localStorage.getItem("accessToken")) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error.response?.data || error;
    }
  }
}

export default new Auth();
