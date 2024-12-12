<script setup lang="ts">
import IconNotification from '@/components/icons/IconNotification.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconInfoOutline from '@/components/icons/IconInfoOutline.vue'
import UserAvatar from '@/components/UserAvatar.vue'
</script>

<template>
  <div class="bg-white rounded-30 p-2 flex items-center gap-4 h-max">
    <input class="rounded-50 h-41 bg-divider pl-8" placeholder="Search" />
    <IconNotification />
    <IconMoon />
    <IconInfoOutline />
    <UserAvatar src="/images/avatar.png" alt="User Profile" />
  </div>
</template>
