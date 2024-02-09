<template>
  <div class="home-view">
    <h1 class="home-view__title">Wellcome to jsDelivr helper</h1>

    <p class="home-view__description">Type your package here</p>

    <BaseInput class="home-view__search" />
  </div>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue'
  import { onMounted, ref } from 'vue'
  // import { instanceApi } from '@/api/instance'

  const search = ref('')

  // onMounted(async () => {
  //   const { data } = await instanceApi.get('packages/npm/bootstra')
  //   console.log(data)
  // })
</script>

<style lang="scss" scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      margin-bottom: 32px;
      text-align: center;
    }

    &__description {
      margin-bottom: 16px;
      text-align: center;
    }
  }
</style>
