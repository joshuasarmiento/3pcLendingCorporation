<template>
  <section id="services" class="py-16 px-4 sm:px-6 bg-neutral-50">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[#28391F] mb-6">Our Services</h2>
      <p class="text-neutral-600 mb-10 max-w-2xl mx-auto text-base md:text-lg">Tailored lending solutions to meet your unique financial goals with flexibility and support.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-[#28391F] rounded-full mx-auto flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-[#28391F] mb-2">Personal Loans</h3>
          <p class="text-neutral-600 mb-4">Flexible options with competitive rates and customizable terms.</p>
          <ul class="text-left text-neutral-600 space-y-2">
            <li class="flex items-center gap-2"><CircleCheck /> Quick approval</li>
            <li class="flex items-center gap-2"><CircleCheck /> Flexible terms</li>
            <li class="flex items-center gap-2"><CircleCheck /> No hidden fees</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-[#28391F] rounded-full mx-auto flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-[#28391F] mb-2">Business Loans</h3>
          <p class="text-neutral-600 mb-4">Financing solutions to grow your enterprise with competitive terms.</p>
          <ul class="text-center text-neutral-600 space-y-2">
            <li class="flex items-center gap-2"><CircleCheck /> Working capital</li>
            <li class="flex items-center gap-2"><CircleCheck /> Equipment financing</li>
            <li class="flex items-center gap-2"><CircleCheck /> Expansion loans</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CircleCheck } from "lucide-vue-next"
</script>