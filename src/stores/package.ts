import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getPopularPackages } from '@/api/mainRequests'
import type { IPackage } from '@/types/package'

interface State {
  packages: IPackage[]
}

export const usePackageStore = defineStore('package', {
  actions: {
    async LOAD_PACKAGES() {
      const data = await getPopularPackages()
      this.SET_PACKAGES(data)
    },

    SET_PACKAGES(packages: IPackage[]) {
      this.packages = packages
    },
  },
  state: (): State => ({
    packages: [],
  }),
  getters: {
    PACKAGES: (state) => state.packages,
  },
})
