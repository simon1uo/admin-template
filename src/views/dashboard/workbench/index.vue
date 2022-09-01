<script setup lang="ts">
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>
<template>
  <div min-w-375>
    <n-card rounded-10>
      <div flex items-center>
        <img :src="userStore.avatar" alt="avatar" w-100 rounded-full />
        <div ml-20 text-18>
          <p fw-600>Hello, {{ userStore.name }}</p>
          <p fw-300>开始您一天的工作吧！</p>
        </div>
        <div ml-auto items-center hidden md:flex>
          <n-statistic label="待办" :value="4" w-80 mr-25 text-right>
            <template #suffix> / 10 </template>
          </n-statistic>
          <n-statistic label="项目" :value="8" w-80 mr-25 text-right> </n-statistic>
          <n-statistic label="团队" :value="300" w-80 mr-25 text-right> </n-statistic>
        </div>
      </div>
    </n-card>

    <n-grid cols="6" item-responsive responsive="screen" x-gap="2">
      <n-grid-item span="6 l:4">
        <n-card title="项目" size="medium" :segmented="true" mt-15 rounded-10 p-0>
          <template #header-extra>
            <n-button text type="primary">更多</n-button>
          </template>
          <div flex flex-wrap justify-around>
            <n-card v-for="i in 9" :key="i" w-250 cursor-pointer hover:card-shadow title="Admin Template" size="small">
              <p op-60>一个基于 Vue3、Vite3、TypeScript、Pinia、Unocss、Naive UI 的轻量级后台管理模板</p>
            </n-card>
          </div>
        </n-card>
      </n-grid-item>
      <n-grid-item span="6 l:2">
        <n-card title="导航" size="medium" :segmented="true" mt-15 rounded-10></n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>
