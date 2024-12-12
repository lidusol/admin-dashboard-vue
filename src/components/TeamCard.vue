<script setup lang="ts">
import { defineProps } from 'vue'
import UserAvatar from '@/components/UserAvatar.vue'
import IconEllipsis from '@/components/icons/IconEllipsis.vue'

defineProps({
  photoSrc: {
    type: Object,
    required: false,
  },
  fullName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-2xl p-2 flex items-center gap-4 shadow-teamCard">
    <div v-if="photoSrc" class="flex items-center gap-2">
      <div class="flex items-center justify-center rounded-full w-14 h-14 bg-background">
        <UserAvatar :src="photoSrc" alt="User Profile" />
      </div>
    </div>

    <div class="flex-1">
      <p class="text-base font-bold text-primary">
        <slot name="fullName">{{ fullName }}</slot>
      </p>

      <p class="text-sm font-medium text-fadedGray">
        <slot name="position">{{ position }}</slot>
      </p>
    </div>
    <div class="transform rotate-90">
      <IconEllipsis fill="#A3AED0" />
    </div>
  </div>
</template>
