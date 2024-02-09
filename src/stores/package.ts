import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getPopularPackages } from '@/api/mainRequests'

export const usePackageStore = defineStore('package', {
  actions: {
    async GET_PACKAGES() {
      getPopularPackages()
    },
  },
  state: () => ({
    packages: [],
  }),
  getters: {
    PACKAGES: (state) => state.packages,
  },
})
