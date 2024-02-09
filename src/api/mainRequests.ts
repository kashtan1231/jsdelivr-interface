import { instanceApi } from './instance'

export const getPopularPackages = async (): Promise<any> => {
  try {
    const { data } = await instanceApi.get('stats/packages')
    return data
  } catch (error: unknown) {
    console.error(error?.message)
  }
}
