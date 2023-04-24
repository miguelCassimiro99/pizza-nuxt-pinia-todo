<script setup lang="ts">
import { useToDoStore } from '@/stores/todo'
const props = defineProps({
  id: { type: String, required: true },
  finished: { type: Boolean, required: true },
  description: { type: String, required: true },
  projectName: { type: String, required: false },
})

const store = useToDoStore()
const { toggleToDoItemFinished } = store
</script>
<template>
<div :class="`${finished ? 'bg-dark-theme-secondary/40' : 'bg-dark-theme-secondary' } card rounded-lg w-full px-3 py-2 shadow-sm flex justify-start items-center gap-4 transition-all`">
  <input
    type="checkbox"
    class="w-7 h-7 accent-primary rounded-lg"
    :checked="finished"
    @change="toggleToDoItemFinished(id)"
  />
  <div>
    <h2 :class="`${finished ? 'text-gray-700' : 'text-gray-100'} text-base font-semibold transition-all`">{{ props.description }}</h2>
    <span :class="`${finished ? 'text-primary/20' : 'text-primary' } text-xs transition-all`">{{ props.projectName || 'No project' }}</span>
  </div>
</div>
</template>
<style scoped>
</style>