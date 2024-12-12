<script lang="ts">
import { defineComponent } from 'vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import IconCross from '@/components/icons/IconCross.vue'
import IconWarning from '@/components/icons/IconWarning.vue'

interface Row {
  name: string
  status: string
  date: string
  progress: string
}

export default defineComponent({
  name: 'MyTable',
  components: {
    IconCheck,
    IconCross,
    IconWarning,
  },
  data() {
    return {
      rows: [
        { name: 'Horizon UI PRO', status: 'Approved', date: '18 Apr 2021', progress: '80' },
        { name: 'Horizon UI Free', status: 'Disable', date: '18 Apr 2021', progress: '30' },
        { name: 'Marketplace', status: 'Warning', date: '20 May 2021', progress: '90' },
        { name: 'Weekly Updates', status: 'Approved', date: '12 Jul 2021', progress: '50' },
      ] as Row[],
    }
  },
})
</script>

<template>
  <div class="w-full">
    <table class="w-full">
      <thead>
        <tr class="text-fadedGray text-left border-b-2 border-fadedGray">
          <th class="py-2">Name</th>
          <th class="py-2">Status</th>
          <th class="py-2">Date</th>
          <th class="py-2">Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td class="py-3 text-sm text-primary font-bold">
            {{ row.name }}
          </td>
          <td class="py-3 text-sm text-primary font-bold flex items-center">
            <span class="mr-2">
              <IconCheck v-if="row.status === 'Approved'" />
              <IconCross v-else-if="row.status === 'Disable'" />
              <IconWarning v-else />
            </span>
            {{ row.status }}
          </td>
          <td class="py-3 text-sm text-primary font-bold">{{ row.date }}</td>
          <td class="py-3 text-sm text-primary font-bold">
            <div class="w-full bg-gray-200 rounded-lg h-2">
              <div
                class="h-2 rounded-lg bg-blue-1 transition-all duration-300 ease-in-out w-2"
                :style="{ width: `${row.progress}%` }"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
