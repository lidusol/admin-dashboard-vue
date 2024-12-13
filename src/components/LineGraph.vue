<script setup lang="ts">
import IconCheck from '@/components/icons/IconCheck.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  type TooltipItem,
  type ChartOptions,
  type ChartData,
} from 'chart.js'

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement)

const chartData: ChartData<'line'> = {
  labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'], // x-axis labels
  datasets: [
    {
      label: 'Layer 1',
      data: [20, 30, 15, 33, 30, 45],
      borderColor: '#84d9fd', // Line color for the first layer
      backgroundColor: '#84d9fd', // Light background color
      fill: true, // Fill the area under the line
      tension: 0.4, // Smoother line
    },
    {
      label: 'Layer 2',
      data: [40, 50, 35, 53, 58, 65],
      borderColor: '#775ffc', // Line color for the second layer
      backgroundColor: '#775ffc', // Light background color
      fill: true, // Fill the area under the line
      tension: 0.4, // Smoother line
    },
  ],
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        title: function (_: TooltipItem<'line'>[]) {
          return ''
        },
        label: function (context: TooltipItem<'line'>) {
          return '$' + context.parsed.y
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      title: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
}
</script>

<template>
  <div class="flex justify-between items-end">
    <div>
      <p class="text-34 font-bold">$37.5K</p>
      <p class="text-base text-fadedGray">
        Total Spent
        <span class="text-sm font-bold text-green ml-4"
          ><IconArrowUp class="inline mr-2" /> +2.45%</span
        >
      </p>
      <div class="flex gap-1 mt-4">
        <IconCheck />
        <p class="text-base font-bold text-green">On track</p>
      </div>
    </div>
    <div class="flex-1">
      <Line id="monthly-report" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
