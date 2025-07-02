<template>
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <Header :showModal="showModal" @toggle-modal="showModal = $event" />
  </div>
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <JobModal :showModal="showModal" @toggle-modal="showModal = $event" />
  </div>
  <Hero />
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <About />
  </div>
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <Services />
  </div>
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <CTA />
  </div>
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <Contact />
  </div>
  <div class="mx-auto overflow-x-hidden max-w-screen-xl">
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import JobModal from './components/JobModal.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import CTA from './components/CTA.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const showModal = ref(false)
</script>

<style scoped>
</style>