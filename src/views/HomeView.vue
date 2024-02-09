<template>
  <div class="home-view">
    <h1 class="home-view__title">Wellcome to jsDelivr helper</h1>

    <p class="home-view__description">Type your package here</p>

    <BaseInput
      v-model.trim="search"
      class="home-view__search"
      placeholder="Type here"
      @update:model-value="onInput"
    />

    <template v-if="search && packageStore.PAGE_PACKAGES.length > 0">
      <TablePackages :list="packageStore.PAGE_PACKAGES" />

      <div v-if="packageStore.PAGE_COUNT > 1" class="home-view__buttons">
        <BaseButton
          class="home-view__buttons-prev"
          :disabled="packageStore.PAGE <= 1"
          @click="prevPage"
          >Prev</BaseButton
        >
        <BaseButton
          v-for="item in packageStore.PAGE_COUNT"
          :key="item"
          :class="[
            'home-view__buttons-pages',
            { 'home-view__buttons-pages--active': packageStore.PAGE === item },
          ]"
          @click="packageStore.SET_PAGE(item)"
        />
        <BaseButton
          :disabled="packageStore.PAGE_COUNT <= packageStore.PAGE"
          class="home-view__buttons-next"
          @click="nextPage"
          >Next</BaseButton
        >
      </div>
    </template>
    <h5 v-else-if="search" class="home-view__nothing">Packages not found</h5>
    <h5 v-else class="home-view__nothing">Here will be results</h5>
  </div>
</template>

<script async setup lang="ts">
  import { onUnmounted, ref } from 'vue'
  import { usePackageStore } from '@/stores/package'
  import BaseInput from '@/components/BaseInput.vue'
  import TablePackages from '@/components/TablePackages.vue'
  import type { IPackage } from '@/types/package'
  import { useRouter } from 'vue-router'
  import BaseButton from '@/components/BaseButton.vue'

  const router = useRouter()

  const search = ref('')

  const packageStore = usePackageStore()

  const sessionStorePackages: IPackage[] = JSON.parse(sessionStorage.getItem('packages') || '[]')

  if (sessionStorePackages.length < 1) {
    await packageStore.LOAD_PACKAGES()

    sessionStorage.setItem('packages', JSON.stringify(packageStore.PACKAGES))
  } else {
    packageStore.SET_PACKAGES(sessionStorePackages)
  }

  const prevPage = () => {
    packageStore.PREV_PAGE()
    router.push({ name: 'HomeViewPage', params: { page: packageStore.PAGE } })
  }

  const nextPage = () => {
    packageStore.NEXT_PAGE()
    router.push({ name: 'HomeViewPage', params: { page: packageStore.PAGE } })
  }

  const onInput = () => {
    if (timeout.value) clearTimeout(timeout.value)

    timeout.value = setTimeout(() => {
      packageStore.SET_SEARCHED_PACKAGES(search.value)
    }, 200)
  }

  const timeout = ref<undefined | number>(undefined)

  onUnmounted(() => {
    clearTimeout(timeout.value)
  })
</script>

<style lang="scss" scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

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

    &__buttons {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 32px;

      &-pages {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: $gray-light;
        transition-duration: 0.2s;

        &:hover {
          background-color: $gray;
        }

        &--active {
          background-color: $gray;
        }
      }
    }
  }
</style>
