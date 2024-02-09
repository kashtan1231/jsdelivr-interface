<template>
  <div class="page">
    <div class="page__wrapper">
      <Suspense>
        <RouterView />
      </Suspense>
    </div>
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
  import TheFooter from './components/TheFooter.vue'
</script>

<style lang="scss">
  html,
  body {
    min-height: 100vh;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    height: 100%;
    min-height: 100vh;
  }

  body {
    width: 100%;
    background-color: $white;
    color: $black;
    font-size: 20px;
    font-weight: 500;
    font-family: $font-family-default;
    line-height: 24px;
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    // min-height: 100vh;
    height: 100%;
    padding: 32px 16px;

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 1240px;
      height: 100%;
    }
  }
</style>
