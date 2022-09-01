<template>
  <div>
    <h1>控制台</h1>
    <n-gradient-text flex items-center text-26 type="info">
      我的角色是：<n-gradient-text type="error">{{ userStore.name }}</n-gradient-text>
    </n-gradient-text>

    <n-gradient-text text-16 mt-10 type="info">我有这些页面的权限：</n-gradient-text>

    <ul mt-10>
      <li
        v-for="item in permissionStore.menus"
        :key="item.name"
        cursor-pointer
        have-color-red
        @click="$router.push(item.path)"
      >
        {{ item }}
      </li>
    </ul>

    <n-button type="info" mt-20 size="small" @click="logout">退出登录</n-button>
  </div>
</template>

<script setup lang="ts">
import { usePermissionStore, useUserStore } from '~/src/store'

const userStore = useUserStore()
const permissionStore = usePermissionStore()

const logout = () => {
  userStore.logout()
}
</script>

<style scoped></style>
