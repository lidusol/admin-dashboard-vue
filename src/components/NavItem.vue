<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: false,
  },
  title: {
    type: [String, Object],
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const activeFill = 'var(--vt-c-blue-1)'
const inactiveFill = 'var(--vt-c-faded-gray)'
</script>
<template>
  <div
    class="flex gap-4 py-6"
    :class="isActive ? 'text-primary border-r-blue-1 border-r-4' : 'text-fadedGray'"
  >
    <div v-if="icon" class="flex items">
      <component :is="icon" :fill="isActive ? activeFill : inactiveFill" />
    </div>
    <div>
      <p
        class="text-base"
        :class="isActive ? 'font-bold text-primary' : 'font-medium text-fadedGray'"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>
