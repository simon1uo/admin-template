<template>
  <div>
    <p text-10>naive</p>
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
    <AppProvider></AppProvider>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppProvider from '@/components/common/AppProvider.vue'

onMounted(() => {
  $loadingBar.start()
  setTimeout(() => {
    $loadingBar.finish()
    $message.success('succss~')
  }, 500)
})
</script>

<style lang="scss"></style>
