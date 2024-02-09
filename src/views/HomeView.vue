<template>
  <div class="home-view">
    <h1 class="home-view__title">Wellcome to jsDelivr helper</h1>

    <p class="home-view__description">Type your package here</p>

    <BaseInput v-model.trim="search" class="home-view__search" placeholder="Type here" />

    <TablePackages v-if="search && searchedPackages.length > 0" :list="searchedPackages" />
    <h5 class="home-view__nothing" v-else-if="searchedPackages.length > 0">Here will be results</h5>
    <h5 class="home-view__nothing" v-else>Not found packages</h5>
  </div>
</template>

<script async setup lang="ts">
  import { ref, computed } from 'vue'
  import { usePackageStore } from '@/stores/package'
  import BaseInput from '@/components/BaseInput.vue'
  import TablePackages from '@/components/TablePackages.vue'
  import type { IPackage } from '@/types/package'

  const packageStore = usePackageStore()
  await packageStore.GET_PACKAGES()

  const searchedPackages = computed(() => {
    return packageStore.PACKAGES.filter((item: IPackage) => {
      console.log(item.name.includes(search.value))

      return item.name.includes(search.value)
    })
  })

  const search = ref('')
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

    &__search {
      margin-bottom: 64px;
    }

    &__nothing {
      color: $gray;
    }
  }
</style>
