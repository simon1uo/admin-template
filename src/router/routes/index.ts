import { RoutesType } from '~/types/router'

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
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
    },
  },
  {
    name: 'Index',
    path: '/',
    redirect: '/dashboard',
  },
]
