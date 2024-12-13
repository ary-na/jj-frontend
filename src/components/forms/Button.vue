<template>
  <div class="d-grid mb-3">
    <button
      class="btn btn-primary"
      :type="type"
      :class="variant"
      @click="handleClick"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "btn-re",
  props: {
    type: {
      type: String,
      default: "button",
    },
    label: String,
    variant: {
      type: String,
      default: "primary",
    },
  },
  emits: ["click"],
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
