<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal__wrapper">
      <h5 class="modal__title">Package info</h5>

      <div class="list">
        <div class="list__item">
          <p><b>Type:</b></p> <p>{{ info.type }}</p>
        </div>

        <div class="list__item">
          <p><b>Name:</b></p> <p>{{ info.name }}</p>
        </div>

        <div v-if="Object.keys(info.tags || {}).length > 0" class="list__item">
          <p><b>Tags:</b></p>
          <p class="list__item-description">
            <span v-for="tag in info.tags" :key="tag">{{ tag }}</span>
          </p>
        </div>

        <div v-if="info.versions?.length > 0" class="list__item list__item--versions">
          <p><b>Versions:</b></p>
          <p class="list__item-description">
            <span v-for="version in info.versions" :key="version.version">
              {{ version.version }}
              <a :href="version.links.entrypoints" target="_blank">Entrypoints</a>
              <a :href="version.links.self" target="_blank">Self</a>
              <a :href="version.links.stats" target="_blank">Stats</a>
            </span>
          </p>
        </div>
      </div>

      <button class="modal__close" @click="onClose">X</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IPackageInfo } from '@/types/package'

  defineProps<{
    info: IPackageInfo
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  const onClose = () => {
    emit('close')
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba($gray, 0.5);
    backdrop-filter: blur(5px);

    &__wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 500px;
      max-height: 80%;
      padding: 32px;
      border-radius: 16px;
      background-color: $white;
    }

    &__close {
      position: absolute;
      top: -40px;
      right: -40px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: $white;
      font-size: 20px;
      line-height: 20px;
      transition-duration: 0.2s;

      &:hover {
        background-color: $gray-light;
      }
    }

    &__title {
      text-align: center;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow: auto;

      &__item {
        display: flex;
        gap: 16px;

        &--versions {
          overflow: auto;
        }

        &-description {
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: auto;

          span {
            display: flex;
            gap: 8px;
          }
        }
      }
    }
  }
</style>
