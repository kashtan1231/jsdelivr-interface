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

export interface IPackageInfo {
  type: 'gh' | 'npm'
  name: string
  tags: {}
  links: {
    stats: string
  }
  versions: [
    {
      version: string
      links: {
        self: string
        stats: string
        entrypoints: string
      }
    },
  ]
}
