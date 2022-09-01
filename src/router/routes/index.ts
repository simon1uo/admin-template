import { RouteModule, RoutesType } from '~/types/router'

export const basicRoutes: RoutesType = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },
]

const modules = import.meta.glob('@/views/**/route.ts', { eager: true }) as RouteModule
const asyncRoutes: RoutesType = []
Object.keys(modules).forEach(key => {
  asyncRoutes.push(modules[key].default)
})
export { asyncRoutes }
