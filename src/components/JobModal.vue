<template>
  <div v-if="showModal" class="modal fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    @click.self="$emit('toggle-modal', false)">
    <div class="modal-content bg-white rounded-2xl p-6 w-full max-w-md">
      <div class="mb-1">
        <div class="flex gap-4 items-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-[#28391F] md:bg-gradient-to-br from-[#28391F] to-neutral-800 rounded-full mb-3">
            <CheckCircle class="w-7 h-7 text-white" />
          </div>
          <div>
            <h2
              class="text-3xl font-bold bg-[#28391F] md:bg-gradient-to-r from-[#28391F] to-neutral-800 bg-clip-text text-transparent mb-1">
              WE ARE HIRING</h2>
            <h3 class="text-xl font-bold text-[#28391F] mb-5">OFFICE CLERK</h3>
          </div>
        </div>
      </div>
      <div class="bg-neutral-50 rounded-lg p-5 mb-5">
        <h4 class="text-base font-semibold text-[#28391F] mb-3">Requirements:</h4>
        <ul class="text-left space-y-2 text-neutral-600">
          <li class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-[#28391F] rounded-full"></div>
            <span>18 years old and above</span>
          </li>
          <li class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-[#28391F] rounded-full"></div>
            <span>At least high school graduate</span>
          </li>
          <li class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-[#28391F] rounded-full"></div>
            <span>Microsoft Word and Excel oriented</span>
          </li>
        </ul>
      </div>
      <div class="mb-5">
        <div class="inline-flex items-center bg-neutral-100 rounded-full px-3 py-1 mb-3">
          <MapPin class="w-4 h-4 text-[#28391F] mr-2" />
          <span class="text-[#28391F] font-medium text-sm">Tawog, Caramoan, Camarines Sur</span>
        </div>
        <p class="text-neutral-600 text-sm">If interested, send a message on Facebook: <strong class="text-[#28391F]">
            <a href="https://www.facebook.com/PandakilaPogi" target="_blank"> Roy Pandakila</a>
          </strong></p>
      </div>
      <button @click="$emit('toggle-modal', false)"
        class="w-full cursor-pointer bg-[#28391F] md:bg-gradient-to-r from-[#28391F] to-neutral-800 text-white px-6 py-2 rounded-full hover:bg-[#1a2614] transition-all duration-300 shadow-md hover:shadow-lg font-semibold">
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, MapPin } from 'lucide-vue-next'

defineProps({
  showModal: Boolean
})
defineEmits(['toggle-modal'])
</script>

<style scoped>
.modal {
  transition: opacity 0.3s ease;
}

.modal-content {
 transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateY(20px) scale(0.95);  transform: translateY(0);
}

.modal-enter-active,
.modal-leave-active {
  .modal-content {
    transform: translateY(0) scale(1);
  opacity: 1;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}
</style>