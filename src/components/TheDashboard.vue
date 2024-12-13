<script setup lang="ts">
import LeftNav from '@/components/LeftNav.vue'
import MainContent from '@/components/MainContent.vue'
</script>

<template>
  <div class="laptop:h-screen w-screen">
    <div class="flex pb-8 h-full w-full">
      <LeftNav />
      <MainContent />
      <DisputePage />
    </div>
  </div>
</template>
