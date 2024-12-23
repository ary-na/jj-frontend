// utils/Toast.js
import { gsap } from "gsap";

export default class Toast {
  static containerEl = null;

  static init() {
    if (!this.containerEl) {
      console.log("Initializing toast container...");
      this.containerEl = document.createElement("div");
      this.containerEl.id = "toast-container";
      document.body.appendChild(this.containerEl);
      console.log("Toast container added to the body:", this.containerEl);
    }
  }

  static show(message, type = "success") {
    console.log(`Showing toast with message: "${message}" and type: "${type}"`);

    if (!this.containerEl) this.init();

    const toastEl = document.createElement("div");
    toastEl.className = `toast ${type}`;
    toastEl.innerText = message;
    this.containerEl.appendChild(toastEl);
    console.log("Toast element classes:", toastEl.className);

    console.log("Toast element created:", toastEl);

    // GSAP Animation
    gsap.fromTo(
      toastEl,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
    );

    console.log("GSAP animation applied to toast element");

    // Auto-hide
    setTimeout(() => {
      gsap.to(toastEl, {
        opacity: 0,
        y: -50,
        duration: 5,
        onComplete: () => {
          console.log("Toast disappearing, removing...");
          toastEl.remove();
        },
      });
    }, 3000);
  }

  static success(message) {
    console.log("Calling success toast...");
    this.show(message, "success");
  }

  static error(message) {
    console.log("Calling error toast...");
    this.show(message, "error");
  }
}