<template>
  <div class="mb-3 position-relative">
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
      :class="{ 'is-invalid': validationMessage }"
      required
    />
    <div v-if="validationMessage" class="invalid-tooltip">
      {{ validationMessage }}
    </div>
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
    validationMessage: String, // Message to display if validation fails
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value); // Emit updated value to parent
    },
  },
};
</script>
