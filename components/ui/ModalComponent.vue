<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

const props = defineProps<{ title: string }>()

const uiStore = useUiStore()
</script>
<template>
<div class="root">
  <Transition name="fade" appear>
    <div class="modal absolute top-0 left-0 bg-dark-theme-secondary/80 w-full h-full flex justify-center items-center" v-if="uiStore.modal.modalOpen">
        <div class="modal-content bg-dark-theme py-4 h-auto w-[300px] px-4 rounded-lg flex flex-col justify-between items-start gap-4">
          <header>
            <h3 class="text-xl md:text-2xl text-primary font-bold">{{ title || 'Modal component' }}</h3>
          </header>
            <slot />
        </div>
      </div>
    </Transition>
</div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>