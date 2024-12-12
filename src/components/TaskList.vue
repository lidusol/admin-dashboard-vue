<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  { id: 1, text: 'Landing Page Design', completed: false },
  { id: 2, text: 'Dashboard Builder', completed: true },
  { id: 3, text: 'Mobile App Design', completed: true },
  { id: 4, text: 'Illustrations', completed: false },
  { id: 5, text: 'Promotional LP', completed: true },
])

const toggleTask = (id: number) => {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.completed = !task.completed
}
</script>

<template>
  <ul class="space-y-4">
    <li v-for="task in tasks" :key="task.id" class="flex items-center space-x-2">
      <input type="checkbox" :checked="task.completed" @change="toggleTask(task.id)" />
      <span :class="{ 'text-primary font-bold': task.completed }" class="text-base">
        {{ task.text }}
      </span>
    </li>
  </ul>
</template>
