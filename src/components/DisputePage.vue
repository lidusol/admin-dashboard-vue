<template>
  <div class="space-y-6">
    <!-- Main Content -->
    <div class="bg-white rounded-20 p-6">
      <!-- Search/Check Section -->
      <div class="mb-8">
        <label class="block text-sm font-medium text-fadedGray mb-2">Transaction Reference</label>
        <div class="flex gap-4">
          <input
            v-model="transactionRef"
            type="text"
            class="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary bg-background"
            placeholder="Enter your transaction ID"
            :disabled="isLoading"
          />
          <button
            @click="checkStatus"
            class="px-8 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!transactionRef || isLoading"
          >
            <span v-if="isLoading">Checking...</span>
            <span v-else>Check Status</span>
          </button>
        </div>
        <p v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
      </div>

      <!-- Transaction Details -->
      <div
        v-if="transactionDetails"
        class="space-y-4 bg-background p-6 rounded-xl border border-gray-100"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-fadedGray">Name</p>
            <p class="font-medium text-primary">{{ transactionDetails.name }}</p>
          </div>
          <div>
            <p class="text-sm text-fadedGray">Phone</p>
            <p class="font-medium text-primary">{{ transactionDetails.phone }}</p>
          </div>
          <div>
            <p class="text-sm text-fadedGray">Amount</p>
            <p class="font-medium text-primary">${{ transactionDetails.amount }}</p>
          </div>
          <div>
            <p class="text-sm text-fadedGray">Date</p>
            <p class="font-medium text-primary">{{ formatDate(transactionDetails.date) }}</p>
          </div>
          <div>
            <p class="text-sm text-fadedGray">Status</p>
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize"
              :class="getStatusClasses(transactionDetails.status)"
            >
              {{ getStatusLabel(transactionDetails.status) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'

type TransactionStatus = 'completed' | 'under_review' | 'rejected' | 'processing' | 'on_hold'

interface TransactionDetails {
  name: string
  phone: string
  amount: string
  date: string
  status: TransactionStatus
}

const transactionRef = ref('')
const transactionDetails = ref<TransactionDetails | null>(null)
const isLoading = ref(false)
const error = ref('')

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getStatusLabel = (status: TransactionStatus): string => {
  const statusMap = {
    completed: 'Completed',
    under_review: 'Under Review',
    rejected: 'Declined',
    processing: 'In Processing',
    on_hold: 'On Hold',
  }
  return statusMap[status]
}

const getStatusClasses = (status: TransactionStatus) => {
  const classes = {
    completed: 'bg-green-50 text-green-700 border border-green-200',
    under_review: 'bg-blue-50 text-blue-700 border border-blue-200',
    processing: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    on_hold: 'bg-purple-50 text-purple-700 border border-purple-200',
    rejected: 'bg-red-50 text-red-700 border border-red-200',
  }
  return classes[status]
}

const checkStatus = async () => {
  if (!transactionRef.value) return

  isLoading.value = true
  error.value = ''

  try {
    // Simulating API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock data - now with different possible statuses for demonstration
    const statuses: TransactionStatus[] = [
      'completed',
      'under_review',
      'rejected',
      'processing',
      'on_hold',
    ]
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

    transactionDetails.value = {
      name: 'John Doe',
      phone: '+1 (555) 000-0000',
      amount: '150.00',
      date: '2024-12-10',
      status: randomStatus,
    }
  } catch (e) {
    error.value = 'Failed to fetch transaction details. Please try again.'
    transactionDetails.value = null
  } finally {
    isLoading.value = false
  }
}
</script>
