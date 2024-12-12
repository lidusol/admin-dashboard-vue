<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import IconStat from '@/components/icons/IconStat.vue'
import IconDollar from '@/components/icons/IconDollar.vue'
import IconUsFlag from '@/components/icons/IconUsFlag.vue'
import IconNewTask from '@/components/icons/IconNewTask.vue'
import IconDoc from '@/components/icons/IconDoc.vue'
</script>

<template>
  <div class="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-6">
    <BaseCard :icon="IconStat" icon-position="left" title="Earnings" body="$350.4" />
    <BaseCard :icon="IconDollar" icon-position="left" title="Spend this month" body="$642.39" />
    <BaseCard title="Sales" body="$574.34">
      <template #footer>
        <span class="text-fadedGray"
          ><span class="text-green font-bold">+23%</span> since last month</span
        >
      </template>
    </BaseCard>
    <BaseCard
      :icon="IconUsFlag"
      icon-position="right"
      title="Your balance"
      body="$1,000"
      :hasSelect="true"
    />
    <BaseCard :icon="IconNewTask" icon-position="left" title="New Tasks" body="154" />
    <BaseCard :icon="IconDoc" icon-position="left" title="Total Projects" body="2935" />
  </div>
</template>
