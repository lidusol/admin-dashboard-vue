<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type ChartData,
} from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

const chartData: ChartData<'bar'> = {
  labels: ['17', '18', '19', '20', '21', '22', '23', '24', '25'], // x-axis labels
  datasets: [
    {
      label: 'Layer 1',
      data: [30, 30, 28, 35, 28, 35, 35, 25, 35],
      backgroundColor: '#775ffc', // First color layer
      barPercentage: 0.4,
      borderRadius: 10,
    },
    {
      label: 'Layer 2',
      data: [30, 30, 30, 30, 30, 30, 30, 20, 30],
      backgroundColor: '#84d9fd', // Second color layer
      barPercentage: 0.4,
      borderRadius: 10,
    },
    {
      label: 'Layer 3',
      data: [30, 30, 15, 30, 20, 30, 30, 20, 25],
      backgroundColor: '#e7edf9', // Third color layer
      barPercentage: 0.4,
      borderRadius: 10,
    },
  ],
}

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
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
      stacked: true,
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
      stacked: true,
    },
  },
}
</script>

<template>
  <div class="flex items-end justify-center">
    <Bar id="weekly-revenue" :options="chartOptions" :data="chartData" />
  </div>
</template>
