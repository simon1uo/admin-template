<script setup lang="ts">
import Page from '~/src/layout/Page/index.vue'
</script>

<template>
  <Page>
    <n-card size="medium" mb-15>
      <p fw-500>
        Admin Template is a simple and modern admin dashboardx template, powered by Vue 3 <icon:logos:vue />, Vite
        <icon:logos:vitejs />, and TypeScript <icon:logos:typescript-icon /> with Naive UI <icon:logos:naiveui />.
      </p>
      <p fw-400 op-70>
        Admin Template 是一个简单易上手的后台管理模版, 使用 Vue 3 <icon:logos:vue />, Vite <icon:logos:vitejs />,
        TypeScript <icon:logos:typescript-icon /> 以及 Naive UI <icon:logos:naiveui /> 开发.
      </p>
    </n-card>

    <n-card title="项目信息" mb-15></n-card>
    <n-card title="开发环境依赖" mb-15></n-card>
  </Page>
</template>

<style scoped></style>
