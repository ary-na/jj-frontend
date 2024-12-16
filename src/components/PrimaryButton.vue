<template>
    <button class="btn mb-3"
      :type="type"
      :class="variant"
      @click="handleClick"
    >
      <slot>
        {{ label }}
      </slot>
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
  },
  emits: ["click"],
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
