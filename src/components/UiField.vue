<template>
  <div class="ui-field">
    <label v-if="label" class="ui-field__label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__label {
    font-size: 14px;
    color: var(--color-text);
  }
}
</style>