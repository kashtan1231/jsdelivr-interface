<template>
  <div class="page">
    <div class="page__wrapper">
      <RouterView />
    </div>
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
  import TheFooter from './components/TheFooter.vue'
  import { onMounted } from 'vue'
  import { usePackageStore } from '@/stores/package'

  const packageStore = usePackageStore()

  onMounted(async () => {
    packageStore.GET_PACKAGES()
  })
</script>

<style lang="scss">
  html,
  body {
    height: 100%;
    max-height: 100vh;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    height: 100%;
    padding: 32px 16px;

    &__wrapper {
      width: 100%;
      max-width: 1240px;
    }
  }
</style>
