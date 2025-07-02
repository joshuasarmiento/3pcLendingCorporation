<template>
  <section class="py-16 px-4 sm:px-6">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[#28391F] mb-4">Ready to Start?</h2>
      <p class="text-neutral-600 mb-8 max-w-xl mx-auto text-base md:text-lg">Take the first step toward your financial future with us.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact-us" 
                class="bg-[#ff0] text-[#28391F] px-6 py-3 rounded-md hover:bg-yellow-300 transition-all duration-300 font-semibold">
          Apply Now
      </a>
        <a href="#home" class="bg-white text-[#28391F] border border-[#28391F] px-6 py-3 rounded-md hover:bg-neutral-50 transition-all duration-300 font-semibold">
          Calculate EMI
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['toggle-modal'])
</script>