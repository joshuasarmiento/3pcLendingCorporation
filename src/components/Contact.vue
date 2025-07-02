<template>
  <section id="contact-us" class="py-16 px-4 bg-neutral-50">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#28391F] mb-5">Contact & Loan Application</h2>
        <p class="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">Reach out for inquiries, support, or to apply for a loan. We're here to assist with your financial needs.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div class="card-hover bg-white p-6 rounded-2xl shadow-md">
          <h3 class="text-xl font-bold text-[#28391F] mb-5">Send Us a Message</h3>
          <form action="https://formspree.io/f/xqabjzyo" method="POST" class="space-y-4">
            <div>
              <input type="text" 
                     name="name"
                     placeholder="Your Full Name" 
                     required
                     class="w-full bg-neutral-50 rounded-lg px-4 py-2 text-[#28391F] text-sm focus:outline-none focus:ring-2 focus:ring-[#28391F]">
            </div>
            <div>
              <input type="email" 
                     name="email"
                     placeholder="Your Email" 
                     required
                     class="w-full bg-neutral-50 rounded-lg px-4 py-2 text-[#28391F] text-sm focus:outline-none focus:ring-2 focus:ring-[#28391F]">
            </div>
            <div>
              <input type="tel" 
                     name="mobile"
                     placeholder="Your Mobile Number" 
                     required
                     pattern="[0-9]{10,15}"
                     class="w-full bg-neutral-50 rounded-lg px-4 py-2 text-[#28391F] text-sm focus:outline-none focus:ring-2 focus:ring-[#28391F]">
            </div>
            <div>
              <select name="inquiry_type" 
                      required
                      class="w-full bg-neutral-50 rounded-lg px-4 py-2 text-[#28391F] text-sm focus:outline-none focus:ring-2 focus:ring-[#28391F]">
                <option value="" disabled selected>Select Inquiry Type</option>
                <option value="general">General Inquiry</option>
                <option value="loan_application">Loan Application</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div>
              <input type="number" 
                     name="loan_amount"
                     placeholder="Loan Amount (if applicable)" 
                     min="0"
                     step="1000"
                     class="w-full bg-neutral-50 rounded-lg px-4 py-2 text-[#28391F] text-sm focus:outline-none focus:ring-2 focus:ring-[#28391F]">
            </div>
            <div>
              <textarea name="message"
                        placeholder="Your Message or Loan Purpose" 
                        rows="4" 
                        required
                        class="w-full bg-neutral-50 rounded-lg px-4 py-2 text-[#28391F] text-sm focus:outline-none focus:ring-2 focus:ring-[#28391F]"></textarea>
            </div>
            <button type="submit" 
                    class="w-full bg-[#28391F] md:bg-gradient-to-r text-white from-[#28391F] to-neutral-800 px-6 py-3 rounded-full text-base font-semibold hover:bg-[#1a2614] transition-all duration-300 shadow-md hover:shadow-lg">
              Submit
            </button>
          </form>
        </div>
        <div class="card-hover bg-white p-6 rounded-2xl shadow-md">
          <h3 class="text-xl font-bold text-[#28391F] mb-5">Contact Information</h3>
          <div class="space-y-4">
            <div class="flex gap-x-5">
              <MapPin class="w-5 h-5 text-[#28391F] mt-1 flex-shrink-0" />
              <div class="grow">
                <h4 class="font-semibold">Our Address:</h4>
                <address class="mt-1 text-neutral-400 text-sm not-italic">
                  Tawog, Caramoan, Camarines Sur
                </address>
              </div>
            </div>
            <div class="flex gap-x-5">
              <Mail class="w-5 h-5 text-[#28391F] flex-shrink-0" />
              <div class="grow">
                <h4 class="font-semibold">Email Us:</h4>
                <a class="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
                  hello@example.so
                </a>
              </div>
            </div>
            <div class="flex gap-x-5">
              <Phone class="w-5 h-5 text-[#28391F] flex-shrink-0" />
              <div class="grow">
                <h4 class="font-semibold">Call Us:</h4>
                <div class="mt-1 text-neutral-400 text-sm">
                  +63 123 456 7890
                </div>
              </div>
            </div>
            <div class="flex gap-x-5">
              <Facebook class="w-5 h-5 text-[#28391F] flex-shrink-0" />
              <div class="grow">
                <h4 class="font-semibold">Facebook:</h4>
                <a class="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="https://www.facebook.com/PandakilaPogi" target="_blank">
                  Roy Pandakila
                </a>
              </div>
            </div>
            <div class="flex gap-x-5">
              <Megaphone class="w-5 h-5 text-[#28391F] flex-shrink-0" />
              <div class="grow">
                <h4 class="font-semibold">We're hiring</h4>
                <p class="mt-1 text-neutral-400 text-sm">
                  We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.
                </p>
                <a 
                  @click="$emit('toggle-modal', true);" 
                  class="group mt-2 inline-flex items-center gap-x-2 font-medium text-sm text-[#28391F] decoration-2 hover:underline focus:outline-hidden focus:underline" href="#">
                    Job openings
                    <svg class="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, Mail, Phone, Facebook, Megaphone } from 'lucide-vue-next'
defineProps({
  showModal: Boolean,
});
defineEmits(['toggle-modal']);
</script>

<style scoped>
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>