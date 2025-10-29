<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style scoped>
.ui-button {
  background-color: #0d021a;
  color: #ff6ec7;
  border: 2px solid #8a2be2;
  font-family: 'Georgia', serif;
  padding: 10px 20px;
}
.ui-button:hover {
  background-color: #05000d;
}
</style>