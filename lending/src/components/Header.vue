<template>
  <header
    class="fixed top-4 inset-x-0 z-50 w-full max-w-5xl mx-auto flex flex-wrap md:justify-start md:flex-nowrap before:absolute before:inset-0 before:rounded-[26px] before:bg-[#28391F]/10 before:backdrop-blur-md">
    <nav
      class="relative w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 px-5 md:py-2">
      <div class="p-1 bg-[#28391F] md:bg-gradient-to-br from-[#04A54B] to-[#28391F] rounded-lg flex items-center justify-center">
        <img src="../assets/logo.png" class="h-8 w-auto" alt="3PC Lending Logo">
      </div>

      <div class="md:order-3 flex items-center gap-x-3">
        <div class="hidden md:flex items-center space-x-6">
          <a href="#home" class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors">Home</a>
          <a href="#about" class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors">About</a>
          <a href="#services" class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors">Services</a>
          <a href="#contact-us" class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors">Contact Us</a>
          <button @click="$emit('toggle-modal', true)"
            class="group cursor-pointer inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-[#28391F] rounded-full focus:outline-none hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Job Application
          </button>
        </div>

        <div class="md:hidden">
          <button type="button"
            class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-full bg-[#28391F] text-white"
            @click="toggleMobileMenu"
            aria-expanded="false"
            aria-controls="hs-navbar-floating-dark"
            aria-label="Toggle navigation">
            <span v-if="mobileMenuOpen">
              <XIcon class="h-5 w-5" />
            </span>
            <span v-else>
              <MenuIcon class="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" 
           id="hs-navbar-floating-dark" 
           class="md:hidden bg-[#28391F]/90 border-t border-neutral-700 transition-all duration-300 ease-in-out"
           :class="{ 'opacity-100 translate-y-0': mobileMenuOpen, 'opacity-0 -translate-y-4 pointer-events-none': !mobileMenuOpen }">
        <div class="container mx-auto px-4 py-3 space-y-3">
          <p class="text-neutral-300 text-sm text-center">Mabuhay! Welcome to 3PC Lending</p>
          <a href="#home" 
             class="block text-neutral-300 hover:text-[#ff0] transition-colors" 
             @click="toggleMobileMenu">Home</a>
          <a href="#about" 
             class="block text-neutral-300 hover:text-[#ff0] transition-colors" 
             @click="toggleMobileMenu">About</a>
          <a href="#services" 
             class="block text-neutral-300 hover:text-[#ff0] transition-colors" 
             @click="toggleMobileMenu">Services</a>
          <a href="#contact-us" 
             class="block text-neutral-300 hover:text-[#ff0] transition-colors" 
             @click="toggleMobileMenu">Contact Us</a>
          <button @click="$emit('toggle-modal', true); toggleMobileMenu()"
            class="w-full group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-[#28391F] rounded-full focus:outline-none hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Job Application
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { MenuIcon, XIcon } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
defineProps({
  showModal: Boolean
})
defineEmits(['toggle-modal'])

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
#hs-navbar-floating-dark {
  transform-origin: top;
}
</style>