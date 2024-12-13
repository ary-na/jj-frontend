<template>
  <div class="mb-3">
    <label class="form-label" :for="id">
        {{ label }}
    </label>
    <input
      class="form-control"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event)"
      required
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String, // Label for the input
    modelValue: String, // Binds to v-model in the parent
    type: String, // Type of the input (text, email, etc.)
    id: String, // ID for the input (also used by the label)
    placeholder: String, // Placeholder text for the input
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value); // Emit updated value to parent
    },
  },
};
</script>
