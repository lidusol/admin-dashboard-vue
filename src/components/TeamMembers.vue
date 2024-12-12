<script setup lang="ts">
import TeamCard from '@/components/TeamCard.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <TeamCard photoSrc="/images/avatar.png" fullName="Adela Parkson" position="Creative Director" />
    <TeamCard photoSrc="/images/avatar.png" fullName="Christian Mad" position="Product Designer" />
    <TeamCard
      photoSrc="/images/avatar.png"
      fullName="Jason Statham"
      position="Junior Graphic Designer"
    />
  </div>
</template>
