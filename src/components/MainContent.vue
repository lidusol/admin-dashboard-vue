<script setup lang="ts">
import UserSetting from '@/components/UserSetting.vue'
import AccountData from '@/components/AccountData.vue'
</script>

<template>
  <div class="px-4 py-49">
    <div class="flex justify-between">
      <div class="ml-2">
        <p class="text-blue-2">Pages / Dashboard</p>
        <h1 class="text-34 font-bold text-primary leading-10 mb-5">Main Dashboard</h1>
      </div>
      <UserSetting />
    </div>
    <AccountData />
  </div>
</template>
