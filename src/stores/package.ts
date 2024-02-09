import { defineStore } from 'pinia'
import { getPopularPackages } from '@/api/mainRequests'
import type { IPackage } from '@/types/package'

interface State {
  packages: IPackage[]
  searchedPackages: IPackage[]
  pageLength: number
  page: number
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

    SET_SEARCHED_PACKAGES(value: string) {
      if (!value) {
        this.searchedPackages = []
        return
      }
      this.searchedPackages = this.packages.filter((item: IPackage) => item.name.includes(value))
    },

    NEXT_PAGE() {
      if (this.PAGE_COUNT > this.page) this.page++
    },

    PREV_PAGE() {
      if (this.page > 1) this.page--
    },

    SET_PAGE(page: number) {
      this.page = page
    },
  },
  state: (): State => ({
    packages: [],
    searchedPackages: [],
    page: 1,
    pageLength: 10,
  }),
  getters: {
    PACKAGES: (state) => state.packages,
    PAGE: (state) => state.page,
    PAGE_COUNT: (state) => Math.ceil(state.searchedPackages.length / state.pageLength),
    PAGE_PACKAGES: (state) => {
      const sliceCount = state.page === 1 ? state.page - 1 : (state.page - 1) * state.pageLength
      return state.searchedPackages.slice(sliceCount, sliceCount + state.pageLength)
    },
  },
})
