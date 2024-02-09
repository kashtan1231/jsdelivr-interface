<template>
  <div class="base-input">
    <input
      class="base-input__input"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="onIntput(($event.target as HTMLInputElement).value)"
    />

    <img class="base-input__search-icon" src="@/assets/search-icon.svg" alt="search-icon" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
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
    position: relative;
    width: fit-content;
    width: 100%;
    min-width: 400px;

    @media screen and (max-width: $mobile) {
      min-width: unset;
    }

    &__input {
      width: 100%;
      padding: 12px;
      border-radius: 16px;
      box-shadow: inset 0 0 0 2px $gray;
      transition-duration: 0.2s;

      &:focus {
        box-shadow: inset 0 0 0 2px $black;
      }
    }

    &__search-icon {
      position: absolute;
      top: 50%;
      right: 12px;
      z-index: -1;
      width: 32px;
      transform: translateY(-50%);
    }
  }
</style>
