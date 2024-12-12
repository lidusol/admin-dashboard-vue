<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: Object,
    default: null,
  },
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <div class="bg-white rounded-20 w-full p-5">
    <!-- Card Header -->
    <div class="flex items-center justify-between mb-4">
      <h3
        class="laptop:text-2xl font-bold text-primary"
        :class="{ 'laptop:text-lg': variant === 'sm' }"
      >
        <slot name="title">{{ title }}</slot>
      </h3>
      <div v-if="icon" class="flex items-center w-33 h-33 bg-divider p-2 rounded-lg">
        <component :is="icon" :fill="'var(--vt-c-blue-1)'" />
      </div>
    </div>

    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>
