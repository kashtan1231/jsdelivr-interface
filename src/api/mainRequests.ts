import { instanceApi } from '@/api/instance'
import type { IPackage } from '@/types/package'

export const getPopularPackages = async (): Promise<IPackage[]> => {
  try {
    const { data } = await instanceApi.get('stats/packages')
    return data
  } catch (error: any) {
    console.error(error?.message)
    return []
  }
}

export const getPackageInfo = async (name: string, type: 'npm' | 'gh'): Promise<IPackage[]> => {
  try {
    const { data } = await instanceApi.get(`packages/${type}/${name}`)
    return data
  } catch (error: any) {
    console.error(error?.message)
    return []
  }
}
