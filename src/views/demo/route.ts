export default {
  name: 'Demo',
  path: '/demo',
  component: () => import('@/layout/index.vue'),
  redirect: '/demo/message',
  meta: {
    title: '功能测试',
    icon: 'mdi:feature-search',
  },
  children: [
    {
      name: 'Message',
      path: 'message',
      component: () => import('./message/index.vue'),
      meta: {
        title: '消息提示',
        icon: 'mdi:message-alert',
      },
    },
    {
      name: 'Tab',
      path: 'tab',
      component: () => import('./tab/index.vue'),
      meta: {
        title: 'Tab操作',
        icon: 'mdi:tab',
      },
    },
  ],
}
