<script setup lang="ts">
import TeamCard from '@/components/TeamCard.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <TeamCard
      photoSrc="/images/AdelaParkson.png"
      fullName="Adela Parkson"
      position="Creative Director"
    />
    <TeamCard
      photoSrc="/images/ChristianMad.png"
      fullName="Christian Mad"
      position="Product Designer"
    />
    <TeamCard
      photoSrc="/images/JasonStatham.png"
      fullName="Jason Statham"
      position="Junior Graphic Designer"
    />
  </div>
</template>
