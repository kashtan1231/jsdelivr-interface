<template>
  <div
    class="home-view"
  >
    <h1
      class="home-view__title"
      >Wellcome to
      jsDelivr
      helper</h1
    >

    <p
      class="home-view__description"
      >Type your
      package
      here</p
    >

    <BaseInput
      class="home-view__search"
    />
  </div>
</template>

<script
  setup
  lang="ts"
>
  import BaseInput from '@/components/BaseInput.vue'
</script>

<style
  lang="scss"
  scoped
>
  .home-view {
    &__title {
      margin-bottom: 64px;
      text-align: center;
    }

    &__description {
      margin-bottom: 16px;
      text-align: center;
    }
  }
</style>
