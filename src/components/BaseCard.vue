<script setup lang="ts">
import { defineProps } from 'vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'

defineProps({
  icon: {
    type: Object,
    required: false,
  },
  iconPosition: {
    type: String, // 'left' or 'right'
    default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value),
  },
  title: {
    type: [String, Object],
    required: true,
  },
  body: {
    type: [String, Object],
    required: true,
  },
  hasSelect: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="bg-white rounded-20 py-5 px-[17px] laptop:min-w-248 flex items-center gap-4"
    :class="{ 'flex-row-reverse': iconPosition === 'right' }"
  >
    <div v-if="icon" class="flex items-center gap-2">
      <div class="flex items-center justify-center rounded-full w-14 h-14 bg-background">
        <component :is="icon" fill="#4318FF" />
      </div>
      <div v-if="hasSelect" class="">
        <IconChevronDown />
      </div>
    </div>

    <div class="flex-1">
      <p class="text-sm font-medium text-fadedGray">
        <slot name="title">{{ title }}</slot>
      </p>

      <p class="font-bold text-2xl text-primary">
        <slot name="body">{{ body }}</slot>
      </p>

      <p class="text-xs">
        <slot name="footer">{{ footer }}</slot>
      </p>
    </div>
  </div>
</template>
