<template>
  <button class="base-button" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      disabled?: boolean
    }>(),
    {
      disabled: false,
    }
  )
</script>

<style lang="scss" scoped>
  .base-button {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    background-color: $gray-light;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    transition-duration: 0.2s;

    &:hover {
      background-color: $gray;
    }

    &:disabled {
      background-color: $gray-light;
      color: $gray;
      cursor: not-allowed;
    }
  }
</style>
