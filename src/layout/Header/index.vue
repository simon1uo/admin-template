<script setup lang="ts">
import MenuCollapse from './components/MenuCollapse.vue'
import BreadCrumb from './components/BreadCrumb.vue'
import UserAvatar from './components/UserAvatar.vue'
</script>

<template>
  <div flex items-center>
    <MenuCollapse />
    <BreadCrumb />
  </div>
  <div ml-auto flex items-center>
    <UserAvatar />
  </div>
</template>

<style scoped></style>
