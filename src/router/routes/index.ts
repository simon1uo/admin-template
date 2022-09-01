import { RouteModule, RoutesType, RouteType } from '~/types/router'

export const basicRoutes: RoutesType = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录',
    },
  },
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/workbench',
    meta: {
      order: 0,
      title: '控制台',
      icon: 'mdi:home',
    },
    children: [
      {
        name: 'Workbench',
        path: 'workbench',
        component: () => import('@/views/dashboard/workbench/index.vue'),
        meta: {
          title: '工作台',
          icon: 'mdi:clock',
        },
      },
      {
        name: 'Analysis',
        path: 'analysis',
        component: () => import('@/views/dashboard/analysis/index.vue'),
        meta: {
          title: '分析板',
          icon: 'mdi:magnify-expand',
        },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    isHidden: true,
  },
  {
    name: 'ExternalLink',
    path: '/external',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '外部链接',
      icon: 'mdi:link',
      order: 99,
    },
    children: [
      {
        name: 'GithubLink',
        path: 'https://github.com/simon1uo/admin-template',
        component: () => {},
        meta: {
          title: 'Github',
          icon: 'ion:logo-github',
        },
      },
      {
        name: 'Docs',
        path: 'https://github.com/simon1uo/admin-template',
        component: () => {},
        meta: {
          title: 'Docs',
          icon: 'ion:document',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE: RouteType = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

const modules = import.meta.glob('@/views/**/route.ts', { eager: true }) as RouteModule
const asyncRoutes: RoutesType = []
Object.keys(modules).forEach(key => {
  asyncRoutes.push(modules[key].default)
})
export { asyncRoutes }
