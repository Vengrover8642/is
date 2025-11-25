<template>
  <input
    :class="['ui-input', { 'ui-input--disabled': isDisabled }]"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 14px;

  &--disabled {
    background-color: var(--color-background-disabled);
    cursor: not-allowed;
  }
}
</style>