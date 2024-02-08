<template>
  <div class="base-input">
    <!-- <label class="base-input__label"></label> -->
    <input
      class="base-input__input"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="onIntput(($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    type?: string
    modelValue: string
    placeholder: string
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const onIntput = (value: string) => {
    emit('update:modelValue', value)
  }
</script>

<style lang="scss" scoped>
  .base-input {
    &__input {
      min-width: 400px;
      padding: 12px;
      border-radius: 16px;
      box-shadow: inset 0 0 0 2px $gray;
      transition-duration: 0.2s;

      &:focus {
        box-shadow: inset 0 0 0 2px $black;
      }
    }
  }
</style>
