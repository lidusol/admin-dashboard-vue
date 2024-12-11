<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Avatar',
  },
})
</script>

<template>
  <div class="w-41 h-41">
    <img :src="src" :alt="alt" class="rounded-full" />
  </div>
</template>
