<template>
  <section id="about" class="py-16 px-4 sm:px-6 bg-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[#28391F] mb-6">About 3PC Lending</h2>
      <p class="text-neutral-600 mb-10 max-w-2xl mx-auto text-base md:text-lg">Rooted in the heart of Caramoan, Camarines Sur, we provide reliable financial solutions with the warmth and integrity of Bicolano hospitality, supporting our community’s dreams.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-[#28391F] rounded-full mx-auto flex items-center justify-center mb-4">
            <Heart class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-[#28391F] mb-2">Trusted Service</h3>
          <p class="text-neutral-600">Serving Caramoan with the trust and care of Bicolano tradition.</p>
        </div>
        <div class="bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-[#28391F] rounded-full mx-auto flex items-center justify-center mb-4">
            <DollarSign class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-[#28391F] mb-2">Competitive Rates</h3>
          <p class="text-neutral-600">Affordable rates inspired by Bicol’s fair and honest spirit.</p>
        </div>
        <div class="bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-[#28391F] rounded-full mx-auto flex items-center justify-center mb-4">
            <Users class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-[#28391F] mb-2">Personal Support</h3>
          <p class="text-neutral-600">Dedicated team with the warmth of Caramoan’s community.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart, DollarSign, Users } from 'lucide-vue-next'
</script>