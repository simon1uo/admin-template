export default {
  name: 'Example',
  path: '/example',
  component: () => import('@/layout/index.vue'),
  redirect: '/example/table',
  meta: {
    icon: 'mdi:page-layout-body',
    title: '页面示例',
  },
  children: [
    {
      name: 'Table',
      path: 'table',
      component: () => import('./table/index.vue'),
      meta: {
        icon: 'mdi:table',
        title: '表格页面',
      },
    },
    {
      name: 'Form',
      path: 'form',
      component: () => import('./form/index.vue'),
      meta: {
        icon: 'mdi:form-textbox',
        title: '表单页面',
      },
    },
    {
      name: 'result',
      path: 'result',
      meta: {
        icon: 'ion:add-circle',
        title: '结果页面',
      },
      children: [
        {
          name: 'success',
          path: 'success',
          meta: {
            title: '成功页面',
            icon: 'mdi:check-circle',
          },
        },
        {
          name: 'fail',
          path: 'fail',
          meta: {
            title: '失败页面',
            icon: 'gridicons:cross-circle',
          },
        },
        {
          name: 'info',
          path: 'info',
          meta: {
            title: '信息页面',
            icon: 'mdi:alert-circle',
          },
        },
      ],
    },
    {
      name: 'settings',
      path: 'settings',
      meta: {
        icon: 'ion:settings',
        title: '设置页面',
      },
      children: [
        {
          name: 'personal',
          path: 'personal',
          meta: {
            icon: 'ion:person',
            title: '个人设置',
          },
        },
        {
          name: 'system',
          path: 'system',
          meta: {
            icon: 'ion:ios-settings',
            title: '系统设置',
          },
        },
      ],
    },
  ],
}
