<template>
  <div class="page">
    <div class="page__wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  body {
    width: 100%;
    color: $black;
    font-family: $font-family-default;
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 120px 16px 64px;

    &__wrapper {
      width: 100%;
      max-width: 1240px;
    }
  }
</style>
