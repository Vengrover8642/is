<template>
  <select
    :class="['ui-select', { 'ui-select--disabled': isDisabled }]"
    :value="modelValue"
    :disabled="isDisabled"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="(option, index) in options" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
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
  options: {
    type: Array<string>,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.ui-select {
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