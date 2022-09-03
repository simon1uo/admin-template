<script setup lang="ts">
import Page from '~/src/layout/Page/index.vue'
import { useAppStore, useTabStore } from '@/store'

const route = useRoute()
const appStore = useAppStore()
const tabStore = useTabStore()

const handleReload = () => {
  appStore.reloadPage()
}

const handleCloseCurrent = () => {
  tabStore.removeTab(route.path)
}

const handleCloseOther = () => {
  tabStore.removeOther(route.path)
}

const handleCloseLeft = () => {
  tabStore.removeLeft(route.path)
}

const handleCloseRight = () => {
  tabStore.removeRight(route.path)
}
</script>

<template>
  <Page>
    <n-card size="medium">
      <n-space>
        <n-button type="info" size="medium" @click="handleReload">重新加载</n-button>
        <n-button type="primary" size="medium" @click="handleCloseCurrent"><icon:ion:close />关闭当前tab</n-button>
        <n-button type="primary" size="medium" @click="handleCloseOther">
          <icon:mdi:arrow-expand-horizontal />关闭其他tab
        </n-button>
        <n-button type="primary" size="medium" @click="handleCloseLeft">
          <icon:mdi:arrow-expand-left />关闭左侧
        </n-button>
        <n-button type="primary" size="medium" @click="handleCloseRight">
          <icon:mdi:arrow-expand-right />关闭右侧
        </n-button>
      </n-space>
    </n-card>
  </Page>
</template>
