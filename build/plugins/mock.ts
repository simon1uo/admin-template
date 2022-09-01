import { viteMockServe } from 'vite-plugin-mock'

export function configMock(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock/api',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock'
      setuptProdMockServer()
    `,
  })
}
