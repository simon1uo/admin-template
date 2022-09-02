<template>
  <Page>
    <n-card title="消息 Message" size="medium" class="mb-15">
      <n-space>
        <n-button type="info" @click="handleInfoMessage"> Info </n-button>
        <n-button type="success" @click="handleSuccessMessage"> Success </n-button>
        <n-button type="warning" @click="handleWarningMessage"> Warning </n-button>
        <n-button type="error" @click="handleErrorMessage"> Error </n-button>
        <n-button type="primary" @click="handleLoadingMessage"> Loading </n-button>
      </n-space>
    </n-card>

    <n-card title="完整 Message 测试" size="medium" class="mb-15">
      <n-button type="primary" @click="handleLogin">
        <icon-mdi:login mr-5 />
        登录消息提示
      </n-button>
    </n-card>

    <n-card title="对话框 Dialog " size="medium" class="mb-15">
      <n-space>
        <n-button type="warning" size="medium" @click="handleConfirmDialog">Cofirm</n-button>
        <n-button type="success" size="medium" @click="handleSuccessDialog">Success</n-button>
        <n-button type="error" size="medium" @click="handleErrorDialog">Error</n-button>
      </n-space>
    </n-card>

    <n-card title="通知 Notification" size="medium" class="mb-15">
      <n-space>
        <n-button type="success" size="medium" @click="notify('success')">Success</n-button>
        <n-button type="info" size="medium" @click="notify('info')">Info</n-button>
        <n-button type="warning" size="medium" @click="notify('warning')">Waring</n-button>
        <n-button type="error" size="medium" @click="notify('error')">Error</n-button>
      </n-space>
    </n-card>
  </Page>
</template>

<script setup lang="ts">
import { NotificationType } from 'naive-ui'
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

function handleConfirmDialog() {
  window.$dialog?.warning({
    title: '警告',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      window.$message?.success('确定')
    },
    onNegativeClick: () => {
      window.$message?.error('不确定')
    },
  })
}
function handleSuccessDialog() {
  window.$dialog?.success({
    title: '成功',
    content: '厉害',
    positiveText: '哇',
    onPositiveClick: () => {
      window.$message?.success('耶！')
    },
  })
}
function handleErrorDialog() {
  window.$dialog?.error({
    title: '错误',
    content: '错了',
    positiveText: '啊',
    onPositiveClick: () => {
      window.$message?.success('我就知道')
    },
  })
}

function notify(type: NotificationType) {
  window.$notification?.create({
    type,
    content: '说点啥呢',
    meta: '想不出来',
    duration: 2500,
    keepAliveOnHover: true,
  })
}
</script>
