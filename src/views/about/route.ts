export default {
  component: () => import('@/layout/index.vue'),
  name: 'About',
  redirect: '/about',
  meta: {
    order: 100,
    title: '关于',
    icon: 'mdi:developer-board',
  },
  children: [
    {
      path: '/about',
      component: () => import('./index.vue'),
    },
  ],
}
