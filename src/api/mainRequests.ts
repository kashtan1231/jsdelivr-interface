import { instanceApi } from '@/api/instance'
import type { IPackage } from '@/types/package'
import type { ErrorPayload } from 'node_modules/vite/types/hmrPayload'

export const getPopularPackages = async (): Promise<IPackage[]> => {
  try {
    const { data } = await instanceApi.get('stats/packages')
    return data
  } catch (error: any) {
    console.error(error?.message)
    return []
  }
}
