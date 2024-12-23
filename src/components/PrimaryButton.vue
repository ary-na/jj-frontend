<template>
  <button
    class="btn mb-3"
    :type="type"
    :class="variant"
    :disabled="loading"
    @click="handleClick"
  >
    <template v-if="loading">
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
    </template>
    <template v-else>
      <slot>
        {{ label }}
      </slot>
    </template>
  </button>
</template>

<script>
export default {
  name: "main-btn",
  props: {
    type: {
      type: String,
      default: "button",
    },
    label: String,
    variant: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  methods: {
    handleClick(event) {
      if (!this.loading) {
        this.$emit("click", event);
      }
    },
  },
};
</script>