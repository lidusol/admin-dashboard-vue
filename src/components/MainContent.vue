<script setup lang="ts">
import UserSetting from '@/components/UserSetting.vue'
import AccountData from '@/components/AccountData.vue'
import LargeCard from '@/components/LargeCard.vue'
import IconStatVue from '@/components/icons/IconStat.vue'
import IconEllipsis from '@/components/icons/IconEllipsis.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import BarChart from '@/components/BarChart.vue'
import DataTable from '@/components/DataTable.vue'
import TaskList from '@/components/TaskList.vue'
import TeamMembers from '@/components/TeamMembers.vue'
</script>

<template>
  <div class="px-4 py-49 flex-1">
    <div class="flex justify-between">
      <div class="ml-2">
        <p class="text-blue-2">Pages / Dashboard</p>
        <h1 class="text-34 font-bold text-primary leading-10 mb-5">Main Dashboard</h1>
      </div>
      <UserSetting />
    </div>
    <div class="overflow-y-scroll laptop:max-h-content">
      <AccountData />
      <div class="grid gap-4 mt-4 laptop:grid-cols-2 laptop:grid-rows-2">
        <LargeCard title="" :icon="IconStatVue"></LargeCard>
        <LargeCard title="Weekly Revenue" :icon="IconStatVue">
          <BarChart />
        </LargeCard>
        <LargeCard title="Complex Table" :icon="IconEllipsis" class="col-span-1">
          <DataTable />
        </LargeCard>
        <div class="grid gap-4 laptop:grid-cols-2">
          <LargeCard :icon="IconEllipsis" variant="sm">
            <template #title>
              <div class="flex gap-2">
                <div class="flex items-center justify-center w-33 h-33 bg-divider p-2 rounded-full">
                  <input type="checkbox" :checked="true" />
                </div>

                <p
                  class="laptop:text-2xl font-bold text-primary"
                  :class="{ 'laptop:text-lg': variant === 'sm' }"
                >
                  Tasks
                </p>
              </div>
            </template>
            <TaskList />
          </LargeCard>
          <LargeCard title="Team members" :icon="IconPlus" variant="sm">
            <TeamMembers />
          </LargeCard>
        </div>
      </div>
    </div>
  </div>
</template>
