export interface IPackage {
  type: 'gh' | 'npm'
  name: string
  bandwidth: number
  hits: number
  links: {
    self: string
    versions: string
  }
  prev: {
    hits: number
    bandwidth: number
  }
}
