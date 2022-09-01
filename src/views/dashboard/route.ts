import type { RouteType } from '~/types/router'

export default {
  name: 'Dashboard',
  path: '/',
  component: () => import('./index.vue'),
  meta: {
    order: 0,
  },
} as RouteType
