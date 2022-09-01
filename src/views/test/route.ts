import type { RouteType } from '~/types/router'

export default {
  name: 'test',
  path: '/test',
  children: [
    {
      name: 'test1',
      path: '/test/test1',
      component: () => import('./test1.vue'),
      meta: {
        requireAuth: true,
        title: 'test1',
        role: ['admin'],
      },
    },
    {
      name: 'test2',
      path: '/test/test2',
      component: () => import('./test2.vue'),
      meta: {
        requireAuth: true,
        title: 'test2',
        role: ['editor'],
      },
    },
  ],
} as RouteType
