<template>
  <header
    class="fixed top-4 inset-x-0 z-50 w-full max-w-5xl mx-auto flex flex-wrap md:justify-start md:flex-nowrap before:absolute before:inset-0 before:rounded-[26px] before:bg-[#28391F]/10 before:backdrop-blur-md"
  >
    <nav
      class="relative w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 px-5 md:py-2"
    >
      <div
        class="p-1 bg-[#28391F] md:bg-gradient-to-br from-[#04A54B] to-[#28391F] rounded-lg flex items-center justify-center"
      >
        <img src="../assets/logo.png" class="h-8 w-auto" alt="3PC Lending Logo" />
      </div>

      <div class="md:order-3 flex items-center gap-x-3">
        <div class="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            @click.prevent="scrollToSection('home')"
            class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            @click.prevent="scrollToSection('about')"
            class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            @click.prevent="scrollToSection('services')"
            class="text-[#28391F] text-sm hover:text-yellow-300 transition-colors"
          >
            Services
          </a>
          <button
            @click="$emit('toggle-modal', true)"
            class="text-[#28391F] cursor-pointer text-sm hover:text-yellow-300 transition-colors"
          >
            Career
         </button>
          <a
            href="#contact-us"
            @click.prevent="scrollToSection('contact-us')"
            class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-[#28391F] rounded-full focus:outline-none hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </a>
        </div>

        <div class="md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-full bg-[#28391F] text-white hover:bg-[#28391F]/80 transition-colors"
            @click="toggleMobileMenu"
            aria-expanded="false"
            aria-controls="hs-navbar-floating-dark"
            aria-label="Toggle navigation"
          >
            <span v-if="mobileMenuOpen">
              <XIcon class="h-5 w-5" />
            </span>
            <span v-else>
              <MenuIcon class="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        @click="toggleMobileMenu"
      ></div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        id="hs-navbar-floating-dark"
        class="fixed bottom-0 left-0 right-0 bg-[#28391F] border-t border-neutral-600 z-50 md:hidden transform transition-all duration-300 ease-in-out rounded-t-2xl"
        :class="{ 'translate-y-0': mobileMenuOpen, 'translate-y-full': !mobileMenuOpen }"
      >
        <div class="container mx-auto px-6 py-6">
          <!-- Welcome Message -->
          <div class="text-center mb-6">
            <p class="text-neutral-300 text-sm">Mabuhay! Welcome to 3PC Lending</p>
          </div>
          
          <!-- Navigation Links -->
          <div class="space-y-1 mb-6">
            <a
              href="#home"
              @click.prevent="scrollToSection('home'); toggleMobileMenu()"
              class="block text-center py-3 px-4 text-neutral-300 hover:text-[#ff0] hover:bg-[#28391F]/50 rounded-lg transition-all duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              @click.prevent="scrollToSection('about'); toggleMobileMenu()"
              class="block text-center py-3 px-4 text-neutral-300 hover:text-[#ff0] hover:bg-[#28391F]/50 rounded-lg transition-all duration-200"
            >
              About
            </a>
            <a
              href="#services"
              @click.prevent="scrollToSection('services'); toggleMobileMenu()"
              class="block text-center py-3 px-4 text-neutral-300 hover:text-[#ff0] hover:bg-[#28391F]/50 rounded-lg transition-all duration-200"
            >
              Services
            </a>
            <a
              href="#contact-us"
              @click.prevent="scrollToSection('contact-us'); toggleMobileMenu()"
              class="block text-center py-3 px-4 text-neutral-300 hover:text-[#ff0] hover:bg-[#28391F]/50 rounded-lg transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
          
          <!-- Job Application Button -->
          <div class="border-t border-neutral-600 pt-4">
            <button
              @click="$emit('toggle-modal', true); toggleMobileMenu()"
              class="w-full group inline-flex items-center justify-center gap-x-2 py-3 px-4 bg-[#ff0] font-medium text-base text-[#28391F] rounded-lg focus:outline-none hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Job Application
            </button>
          </div>
          
          <!-- Close indicator -->
          <div class="flex justify-center mt-4">
            <div class="w-12 h-1 bg-neutral-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, inject } from 'vue';
import { MenuIcon, XIcon } from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
defineProps({
  showModal: Boolean,
});
defineEmits(['toggle-modal']);

// Inject Lenis instance
const lenis = inject('lenis');

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  if (lenis) {
    lenis.scrollTo(`#${sectionId}`, {
      duration: 1.2, // Match Lenis duration from main.js
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      offset: -80, // Adjust for fixed header height
    });
  } else {
    // Fallback to default scroll if Lenis is unavailable
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* Smooth transitions for mobile menu */
#hs-navbar-floating-dark {
  transform-origin: bottom;
}

/* Prevent body scroll when mobile menu is open */
body:has(#hs-navbar-floating-dark) {
  overflow: hidden;
}
</style>