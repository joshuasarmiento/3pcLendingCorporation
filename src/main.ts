import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import Lenis from 'lenis';

const app = createApp(App);

// Initialize Lenis
// @ts-ignore
const lenis = new Lenis({
  duration: 1.2, // Animation duration in seconds
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing for smooth scrolling
  // @ts-ignore
  smooth: true, // Enable smooth scrolling
});

// Animation frame loop
// @ts-ignore
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Provide Lenis instance to all components
app.provide('lenis', lenis);

// Mount the Vue app
app.mount('#app');
