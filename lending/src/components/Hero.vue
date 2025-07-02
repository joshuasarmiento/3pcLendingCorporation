<template>
  <section id="home" class="relative pt-30 pb-16 px-4 min-h-screen flex items-center overflow-hidden">
    <svg class="absolute -bottom-20 start-1/2 w-[1200px] transform -translate-x-1/2" width="2745" height="388" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" class="stroke-neutral-700/50" stroke="currentColor"></path>
        <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" class="stroke-neutral-700/50" stroke="currentColor"></path>
      </svg>
    <div class="absolute inset-0">
      <div class="absolute top-16 left-8 w-64 h-64 bg-[#28391F]/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-16 right-8 w-80 h-80 bg-[#ff0]/20 rounded-full blur-3xl"></div>
    </div>
    <div class="container mx-auto relative z-10">
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-5xl font-bold text-[#28391F] mb-5 leading-tight">Your Financial Companion <span class="block sm:hidden"></br></span>is Here!</h1>
        <p class="text-lg md:text-xl text-neutral-600 mb-2 max-w-xl mx-auto">Quick, easy, and reliable loans tailored for our vibrant community in Caramoan. </p>
        <p class="text-base md:text-lg text-neutral-600 max-w-xl mx-auto">See how much you can borrow with just a few clicks!</p>
      </div>
      <!-- Loan Calculator -->
      <div id="calculator" class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6 bg-neutral-50/80 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200">
          <div class="md:col-span-2 space-y-6">
            <div class="flex flex-wrap gap-3 mb-6">
              <button :class="{'bg-[#28391F] text-white border-b-4 border-[#1a2614] cursor-pointer': loanType === 'short', 'text-neutral-600 hover:text-[#28391F] cursor-pointer': loanType !== 'short'}" 
                      class="px-5 py-2 rounded-full font-semibold transition-colors" 
                      @click="loanType = 'short'">SHORT TERM LOANS</button>
              <button :class="{'bg-[#28391F] text-white border-b-4 border-[#1a2614]  cursor-pointer': loanType === 'personal', 'text-neutral-600 hover:text-[#28391F] cursor-pointer': loanType !== 'personal'}" 
                      class="px-5 py-2 rounded-full font-semibold transition-colors" 
                      @click="loanType = 'personal'">PERSONAL LOANS</button>
            </div>
            <div class="space-y-3">
              <label class="block text-[#28391F] font-semibold text-base">Loan Amount</label>
              <div class="flex items-center gap-3 flex-wrap">
                <span class="text-neutral-600 text-xs">{{ minAmount.toLocaleString() }}</span>
                <div class="flex-1 relative">
                  <input type="range" 
                         v-model.number="loanAmount" 
                         :min="minAmount" 
                         :max="maxAmount" 
                         step="1000" 
                         class="w-full h-2 bg-neutral-300/30 rounded-lg appearance-none cursor-pointer slider">
                  <div class="flex justify-between text-xs text-neutral-600 mt-1">
                    <span>{{ minAmount.toLocaleString() }}</span>
                    <span>{{ maxAmount.toLocaleString() }}</span>
                  </div>
                </div>
                <span class="text-neutral-600 text-xs">{{ maxAmount.toLocaleString() }}</span>
                <input type="number" 
                       v-model.number="loanAmount" 
                       :min="minAmount" 
                       :max="maxAmount" 
                       class="w-24 bg-neutral-100/20 rounded-lg px-3 py-1 text-[#28391F] font-semibold text-sm border" 
                       @input="restrictInput('loanAmount', minAmount, maxAmount)">
              </div>
            </div>
            <div class="space-y-3">
              <label class="block text-[#28391F] font-semibold text-base">Term In Month</label>
              <div class="flex items-center gap-3 flex-wrap">
                <span class="text-neutral-600 text-xs">{{ minTerm }}</span>
                <div class="flex-1 relative">
                  <input type="range" 
                         v-model.number="term" 
                         :min="minTerm" 
                         :max="maxTerm" 
                         step="1" 
                         class="w-full h-2 bg-neutral-300/30 rounded-lg appearance-none cursor-pointer slider">
                  <div class="flex justify-between text-xs text-neutral-600 mt-1">
                    <span>{{ minTerm }}</span>
                    <span>{{ maxTerm }}</span>
                  </div>
                </div>
                <span class="text-neutral-600 text-xs">{{ maxTerm }}</span>
                <input type="number" 
                       v-model.number="term" 
                       :min="minTerm" 
                       :max="maxTerm" 
                       class="w-24 bg-neutral-100/20 rounded-lg px-3 py-1 text-[#28391F] font-semibold text-sm border" 
                       @input="restrictInput('term', minTerm, maxTerm)">
              </div>
            </div>
            <div class="space-y-3">
              <label class="block text-[#28391F] font-semibold text-base">Interest (%)</label>
              <div class="flex items-center gap-3 flex-wrap">
                <span class="text-neutral-600 text-xs">{{ minInterest }}</span>
                <div class="flex-1 relative">
                  <input type="range" 
                         v-model.number="interest" 
                         :min="minInterest" 
                         :max="maxInterest" 
                         step="0.1" 
                         class="w-full h-2 bg-neutral-300/30 rounded-lg appearance-none cursor-pointer slider">
                  <div class="flex justify-between text-xs text-neutral-600 mt-1">
                    <span>{{ minInterest }}%</span>
                    <span>{{ maxInterest }}%</span>
                  </div>
                </div>
                <span class="text-neutral-600 text-xs">{{ maxInterest }}</span>
                <input type="number" 
                       v-model.number="interest" 
                       :min="minInterest" 
                       :max="maxInterest" 
                       step="0.1" 
                       class="w-24 bg-neutral-100/20 rounded-lg px-3 py-1 text-[#28391F] font-semibold text-sm border border" 
                       @input="restrictInput('interest', minInterest, maxInterest)">
              </div>
            </div>
            <div class="pt-5">
              <button @click="calculateEMI" 
                      class="bg-[#ff0] cursor-pointer hover:bg-yellow-300 text-[#28391F] px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                Calculate Loan
              </button>
            </div>
          </div>
          <div class="bg-[#28391F] md:bg-gradient-to-br from-[#28391F] to-[#1f291a] rounded-xl p-5 text-white flex flex-col items-center justify-center">
            <div class="text-center mb-5">
              <h3 class="text-base font-semibold text-neutral-300 mb-2">Monthly EMI</h3>
              <div class="text-3xl font-bold">{{ emiResult ? emiResult.toFixed(2) + ' ₱' : '0.00 ₱' }}</div>
            </div>
            <div class="space-y-5">
              <div class="text-center">
                <h4 class="text-xs text-neutral-300 mb-1">Loan amount</h4>
                <div class="text-xl font-bold">{{ loanAmount.toFixed(2) }} ₱</div>
              </div>
              <div class="text-center">
                <h4 class="text-xs text-neutral-300 mb-1">Total Interest</h4>
                <div class="text-xl font-bold">{{ totalInterest ? totalInterest.toFixed(2) + ' ₱' : '0.00 ₱' }}</div>
              </div>
              <div class="text-center">
                <h4 class="text-xs text-neutral-300 mb-1">Total months</h4>
                <div class="text-2xl font-bold">{{ term }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const loanType = ref('short')
const loanAmount = ref(10000)
const term = ref(12)
const interest = ref(5)
const emiResult = ref(null)
const totalInterest = ref(null)

const minAmount = ref(5000)
const maxAmount = ref(50000)
const minTerm = ref(6)
const maxTerm = ref(36)
const minInterest = ref(3)
const maxInterest = ref(15)

watch(loanType, (newType) => {
  if (newType === 'short') {
    minAmount.value = 5000
    maxAmount.value = 50000
    minTerm.value = 6
    maxTerm.value = 36
    minInterest.value = 3
    maxInterest.value = 15
  } else if (newType === 'personal') {
    minAmount.value = 10000
    maxAmount.value = 100000
    minTerm.value = 12
    maxTerm.value = 60
    minInterest.value = 5
    maxInterest.value = 20
  }
  if (loanAmount.value < minAmount.value) loanAmount.value = minAmount.value
  if (loanAmount.value > maxAmount.value) loanAmount.value = maxAmount.value
  if (term.value < minTerm.value) term.value = minTerm.value
  if (term.value > maxTerm.value) term.value = maxTerm.value
  if (interest.value < minInterest.value) interest.value = minInterest.value
  if (interest.value > maxInterest.value) interest.value = maxInterest.value
})

const restrictInput = (field, min, max) => {
  if (field === 'loanAmount') {
    if (loanAmount.value < min) loanAmount.value = min
    if (loanAmount.value > max) loanAmount.value = max
  } else if (field === 'term') {
    if (term.value < min) term.value = min
    if (term.value > max) term.value = max
  } else if (field === 'interest') {
    if (interest.value < min) interest.value = min
    if (interest.value > max) interest.value = max
  }
}

const calculateEMI = () => {
  const principal = loanAmount.value
  const monthlyRate = interest.value / 100 / 12
  const months = term.value
  if (principal && monthlyRate && months) {
    const factor = Math.pow(1 + monthlyRate, months)
    emiResult.value = (principal * monthlyRate * factor) / (factor - 1)
    totalInterest.value = (emiResult.value * months) - principal
  } else {
    emiResult.value = null
    totalInterest.value = null
  }
}
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #28391F;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #28391F;
  cursor: pointer;
}
</style>