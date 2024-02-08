<template>
  <div class="home-view">
    <!-- <h1 class="home-view__title">Wellcome to jsDelivr helper</h1> -->

    <!-- <p class="home-view__description">Type your package here</p> -->

    <!-- <BaseInput class="home-view__search" /> -->
    <ais-instant-search :search-client="searchClient" index-name="instant_search">
      <ais-search-box />
      <ais-hits>
        <template v-slot:item="{ item }">
          <h2>{{ item.name }}</h2>
        </template>
      </ais-hits>
    </ais-instant-search>
  </div>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue'
  import { onMounted } from 'vue'
  import { instanceApi } from '@/api/instance'
  import algoliasearch from 'algoliasearch/lite'
  import 'instantsearch.css/themes/algolia-min.css'

  const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76')

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
      margin-bottom: 64px;
      text-align: center;
    }

    &__description {
      margin-bottom: 16px;
      text-align: center;
    }
  }
</style>
