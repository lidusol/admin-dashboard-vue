<script setup lang="ts">
import IconDashboard from '@/components/icons/IconDashboard.vue'
import IconCart from '@/components/icons/IconCart.vue'
import IconStatVue from '@/components/icons/IconStat.vue'
import IconKanban from '@/components/icons/IconKanban.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconLock from '@/components/icons/IconLock.vue'
import NavItem from '@/components/NavItem.vue'
import ProCard from '@/components/ProCard.vue'
</script>

<template>
  <div class="relative flex flex-col bg-white py-14 laptop:h-full min-w-290 rounded-ee-20">
    <h2 class="text-26 font-bold font-poppins text-primary px-8 ml-22 mb-12">HORIZON</h2>
    <div class="bg-divider border-b-[1px]"></div>
    <div class="flex flex-col mt-12 pl-8 desktop:gap-4">
      <NavItem :icon="IconDashboard" :isActive="true" title="Dashboard" />
      <NavItem :icon="IconCart" title="NFT Marketplace" />
      <NavItem :icon="IconStatVue" title="Tables" />
      <NavItem :icon="IconKanban" title="Kanban" />
      <NavItem :icon="IconUser" title="Profile" />
      <NavItem :icon="IconLock" title="Sign In" />
    </div>
    <ProCard />
  </div>
</template>
