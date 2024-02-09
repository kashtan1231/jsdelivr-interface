<template>
  <table class="table-packages">
    <thead class="table-packages__head">
      <tr>
        <th class="table-packages__head-name"> Name </th>
        <th> Link </th>
      </tr>
    </thead>
    <tbody class="table-packages__body">
      <tr v-for="item in list" :key="item.name">
        <td>{{ item.name }}</td>
        <td>
          <p>
            <a :href="item.links.self" target="_blank">{{ item.links.self }}</a>
            <button class="info-button" @click="showInfo(item.name, item.type)">
              info <img class="info-button__icon" src="@/assets/info-icon.svg" alt="info-icon" />
            </button>
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  <Teleport to="#app">
    <Modal v-if="isShowModal" :info="modalInfo" @close="isShowModal = false" />
  </Teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { IPackage, IPackageInfo } from '@/types/package'
  import Modal from '@/components/ModalPackage.vue'
  import { getPackageInfo } from '@/api/mainRequests'

  defineProps<{
    list: IPackage[]
  }>()

  const modalInfo = ref<IPackageInfo | {}>({})

  const showInfo = async (name: string, type: 'gh' | 'npm') => {
    isShowModal.value = true
    modalInfo.value = await getPackageInfo(name, type)
  }

  const isShowModal = ref(false)
</script>

<style lang="scss" scoped>
  .table-packages {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 8px;
      border: 1px solid $black;
      border-collapse: collapse;
    }

    &__head {
      background-color: $gray-light;
    }

    &__body {
      p {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        align-items: center;

        .info-button {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 8px;
          border-radius: 8px;
          background-color: $gray-light;
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          transition-duration: 0.2s;

          &:hover {
            background-color: $gray;
          }

          &__icon {
            width: 20px;
          }
        }
      }
    }
  }
</style>
