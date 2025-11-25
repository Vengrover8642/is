<template>
  <button
    :class="['ui-button', `ui-button--${layout}`, { 'ui-button--disabled': isDisabled }]"
    :disabled="isDisabled"
    :type="type"
    :data-variant="layout"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  layout: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value),
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
    validator: (value: string) => ['submit', 'button'].includes(value),
  },
});
</script>

<style scoped>
.ui-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &--primary {
    background-color: var(--color-primary);
    color: white;
  }

  &--secondary {
    background-color: var(--color-secondary);
    color: var(--color-text);
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>