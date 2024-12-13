<script setup lang="ts">
import { ref, computed } from 'vue'

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

const isValidReference = computed(() => {
  const pattern = /^[A-Z0-9]{8,15}$/
  return pattern.test(transactionRef.value)
})

const formatReference = () => {
  transactionRef.value = transactionRef.value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 15)
}

const getStatusLabel = (status: TransactionStatus): string => {
  const statusMap = {
    completed: 'Completed',
    under_review: 'Under Review',
    rejected: 'Declined',
    processing: 'In Process',
    on_hold: 'On Hold',
  }
  return statusMap[status]
}

const getStatusClasses = (status: TransactionStatus): string => {
  const classes = {
    completed: 'bg-green-50 text-green-700 border border-green-200',
    under_review: 'bg-blue-50 text-blue-700 border border-blue-200',
    processing: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    on_hold: 'bg-purple-50 text-purple-700 border border-purple-200',
    rejected: 'bg-red-50 text-red-700 border border-red-200',
  }
  return classes[status]
}

const clearTransaction = () => {
  transactionRef.value = ''
  transactionDetails.value = null
  error.value = ''
}

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const checkStatus = async () => {
  if (!transactionRef.value || !isValidReference.value) return

  isLoading.value = true
  error.value = ''

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
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
  } catch {
    error.value = 'Failed to fetch transaction details. Please try again.'
    transactionDetails.value = null
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-background p-6">
    <div class="w-full max-w-2xl space-y-8">
      <div class="text-left space-y-2">
        <div class="flex items-center gap-2">
          <div class="h-8 w-1 bg-primary rounded-full"></div>
          <p class="text-sm font-medium text-fadedGray tracking-wide uppercase">
            Transaction Status
          </p>
        </div>
        <h1 class="text-2xl font-semibold text-primary">Check your transaction status</h1>
        <p class="text-fadedGray">
          Enter your transaction reference number to track your payment status
        </p>
      </div>

      <div class="bg-white rounded-20 p-8 shadow-sm border border-gray-100">
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-medium text-fadedGray"
              >Chapa Transaction Reference</label
            >
            <span class="text-xs text-fadedGray">Example: CPTXN12345678</span>
          </div>

          <div class="flex gap-4">
            <div class="flex-1 relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div class="bg-primary/10 rounded-md p-1">
                  <svg
                    class="h-4 w-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>

              <input
                v-model="transactionRef"
                type="text"
                class="w-full pl-14 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background transition-all duration-200 font-mono uppercase"
                placeholder="Enter your transaction ID"
                :disabled="isLoading"
                maxlength="15"
                @input="formatReference"
              />

              <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span v-if="transactionRef" class="text-xs text-fadedGray">
                  {{ transactionRef.length }}/15
                </span>
                <button
                  v-if="transactionRef"
                  @click="clearTransaction"
                  class="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button
              @click="checkStatus"
              class="px-8 py-3.5 bg-green-2 text-white rounded-xl hover:opacity-90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm hover:shadow-md"
              :disabled="!isValidReference || isLoading"
            >
              <span v-if="isLoading" class="animate-spin">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
              <span v-if="isLoading">Checking...</span>
              <span v-else>Check Status</span>
            </button>
          </div>

          <div class="mt-2">
            <p v-if="error" class="text-sm text-red-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ error }}
            </p>
          </div>
        </div>

        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="transactionDetails"
            class="space-y-6 bg-background p-8 rounded-xl border border-gray-100"
          >
            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-1">
                <p class="text-sm text-fadedGray">Name</p>
                <p class="font-medium text-primary text-lg">{{ transactionDetails.name }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-fadedGray">Phone</p>
                <p class="font-medium text-primary text-lg">{{ transactionDetails.phone }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-fadedGray">Amount</p>
                <p class="font-medium text-primary text-lg">${{ transactionDetails.amount }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-fadedGray">Date</p>
                <p class="font-medium text-primary text-lg">
                  {{ formatDate(transactionDetails.date) }}
                </p>
              </div>
              <div class="col-span-2 space-y-1">
                <p class="text-sm text-fadedGray">Status</p>
                <span
                  class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium capitalize gap-2"
                  :class="getStatusClasses(transactionDetails.status)"
                >
                  <span
                    class="w-2 h-2 rounded-full"
                    :class="{
                      'bg-green-500': transactionDetails.status === 'completed',
                      'bg-blue-500': transactionDetails.status === 'under_review',
                      'bg-yellow-500': transactionDetails.status === 'processing',
                      'bg-purple-500': transactionDetails.status === 'on_hold',
                      'bg-red-500': transactionDetails.status === 'rejected',
                    }"
                  ></span>
                  {{ getStatusLabel(transactionDetails.status) }}
                </span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
