<template>
  <table class="table-packages">
    <thead class="table-packages__head">
      <tr>
        <th class="table-packages__head-name"
          ><p><b>Name</b></p></th
        >
        <th
          ><p><b>Link</b></p></th
        >
      </tr>
    </thead>
    <tbody class="table-packages__body">
      <tr v-for="item in list" :key="item.name">
        <td
          ><p
            ><span>{{ item.name }}</span></p
          ></td
        >
        <td>
          <p>
            <a :href="item.links.self" target="_blank">{{ item.links.self }}</a>
            <BaseButton class="info-button" @click="showInfo(item.name, item.type)">
              <p><b>info</b></p>
              <img class="info-button__icon" src="@/assets/info-icon.svg" alt="info-icon" />
            </BaseButton>
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
  import BaseButton from './BaseButton.vue'

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

        span {
          overflow: hidden;
          width: 100%;
          max-width: 840px;
          text-overflow: ellipsis;
          white-space: nowrap;

          @media screen and (max-width: 540px) {
            max-width: 120px;
          }
        }

        a {
          overflow: hidden;
          width: 100%;
          max-width: 840px;
          text-overflow: ellipsis;
          white-space: nowrap;

          @media screen and (max-width: $tablet) {
            max-width: 300px;
          }

          @media screen and (max-width: $mobile) {
            max-width: 200px;
          }

          @media screen and (max-width: 540px) {
            max-width: 120px;
          }
        }

        .info-button {
          p {
            @media screen and (max-width: $mobile) {
              display: none;
            }
          }

          &__icon {
            width: 20px;
          }
        }
      }
    }
  }
</style>
