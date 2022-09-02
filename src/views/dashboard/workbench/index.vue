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
          <p fw-300 op-60>开始您一天的工作吧！</p>
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

    <n-grid cols="6" item-responsive responsive="screen" x-gap="15">
      <n-grid-item span="6 l:4">
        <n-card
          title="项目"
          size="medium"
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          mt-15
          rounded-10
        >
          <div class="flex flex-wrap project-card">
            <n-card size="medium" class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden" hoverable>
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <icon:mdi:github />
                  </n-icon>
                </span>
                <span class="text-20 ml-4">Github</span>
              </div>
              <div class="flex my-2 text-gray-400">是一个面向开源及私有软件项目的托管平台。</div>
            </n-card>

            <n-card size="medium" class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden" hoverable>
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <icon:logos:vue />
                  </n-icon>
                </span>
                <span class="text-20 ml-4">Vue</span>
              </div>
              <div class="flex my-2 text-gray-400">渐进式 JavaScript 框架</div>
            </n-card>

            <n-card size="medium" class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden" hoverable>
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <icon:logos:html-5 />
                  </n-icon>
                </span>
                <span class="text-20 ml-4"> HTML5 </span>
              </div>
              <div class="flex my-2 text-gray-400">是互联网的下一代标准。</div>
            </n-card>

            <n-card size="medium" class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden" hoverable>
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <icon:logos:angular-icon />
                  </n-icon>
                </span>
                <span class="text-20 ml-4">Angular</span>
              </div>
              <div class="flex my-2 text-gray-400">是一个现代 Web 开发平台</div>
            </n-card>

            <n-card size="medium" class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden" hoverable>
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <icon:logos:react />
                  </n-icon>
                </span>
                <span class="text-20 ml-4">React</span>
              </div>
              <div class="flex my-2 text-gray-400">是一个 用于构建用户界面的 JavaScript 库。</div>
            </n-card>

            <n-card size="medium" class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden" hoverable>
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <icon:logos:javascript />
                  </n-icon>
                </span>
                <span class="text-20 ml-4">JavaScript</span>
              </div>
              <div class="flex my-2 text-gray-400"></div>
            </n-card>
          </div>
        </n-card>
      </n-grid-item>
      <n-grid-item span="6 l:2">
        <n-card
          title="导航"
          size="medium"
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          mt-15
          rounded-10
        >
          <div class="flex flex-wrap project-card">
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#68c755">
                    <icon:mdi:view-dashboard />
                  </n-icon>
                </span>
                <span class="text-lx text-center">主控台</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#fab251">
                    <icon:mdi:list-box />
                  </n-icon>
                </span>
                <span class="text-lx text-center">列表</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#1890ff">
                    <icon:mdi:form-dropdown />
                  </n-icon>
                </span>
                <span class="text-lx text-center">表单</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#f06b96">
                    <icon:mdi:menu />
                  </n-icon>
                </span>
                <span class="text-lx text-center">权限管理</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#7238d1">
                    <icon:mdi:lock />
                  </n-icon>
                </span>
                <span class="text-lx text-center">系统管理</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="">
                    <icon:mdi:view-dashboard-variant />
                  </n-icon>
                </span>
                <span class="text-lx text-center">主控台</span>
              </div>
            </n-card>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style lang="scss">
.project-card {
  margin-left: 0px;
  &-item {
    margin: 0px;
    width: 33.333333%;
  }
}
</style>
