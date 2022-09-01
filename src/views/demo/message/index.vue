<template>
  <Page>
    <n-card title="Message" size="medium" mb-15>
      <n-button type="info" @click="handleInfoMessage"> Info </n-button>
      <n-button type="success" @click="handleSuccessMessage"> Success </n-button>
      <n-button type="warning" @click="handleWarningMessage"> Warning </n-button>
      <n-button type="error" @click="handleErrorMessage"> Error </n-button>
      <n-button type="primary" @click="handleLoadingMessage"> Loading </n-button>
    </n-card>

    <n-card title="完整 Message 测试" size="medium" mb-15>
      <n-button type="primary" @click="handleLogin">
        <icon-mdi:login mr-5 />
        登录消息提示
      </n-button>
    </n-card>

    <n-card title="Dialog" size="medium" mb-15> </n-card>
  </Page>
</template>

<script setup lang="ts">
import Page from '~/src/layout/Page/index.vue'

function handleInfoMessage() {
  window.$message?.info('info')
}

function handleSuccessMessage() {
  window.$message?.success('success')
}

function handleWarningMessage() {
  window.$message?.warning('WARNING')
}

function handleErrorMessage() {
  window.$message?.error('ERROR')
}

function handleLoadingMessage() {
  window.$message?.loading('loading...')
}

function handleLogin() {
  window.$message?.loading('登录中...')
  setTimeout(() => {
    window.$message?.error('登录失败')
    window.$message?.loading('正在尝试重新登陆...')
    setTimeout(() => {
      window.$message?.success('登录成功')
    }, 2000)
  }, 2000)
}
</script>
