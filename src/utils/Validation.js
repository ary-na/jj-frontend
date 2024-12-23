// utils/Validation.js
export default class Validation {
  static validateName(name) {
    if (!name.trim()) {
      return "You must enter your name.";
    }
    return "";
  }

  static validateEmail(email) {
    if (!email.trim()) {
      return "You must enter your email.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "You must enter a valid email address.";
    }
    return "";
  }

  static validatePassword(password) {
    if (!password.trim()) {
      return "You must enter a password.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return "";
  }

  static validateRegisterForm(data) {
    const errors = {};
    errors.name = this.validateName(data.name);
    errors.email = this.validateEmail(data.email);
    errors.password = this.validatePassword(data.password);

    // Filter out empty messages
    Object.keys(errors).forEach((key) => {
      if (!errors[key]) delete errors[key];
    });

    return errors;
  }

  static validateLoginForm(data) {
    const errors = {};
    errors.email = this.validateEmail(data.email);
    errors.password = this.validatePassword(data.password);

    // Filter out empty messages
    Object.keys(errors).forEach((key) => {
      if (!errors[key]) delete errors[key];
    });

    return errors;
  }
}
