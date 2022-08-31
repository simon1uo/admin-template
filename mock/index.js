import { createProdMockServer } from 'vite-plugin-mock'
import api from './api'

export function setupProdMockServer() {
  createProdMockServer(api)
}
