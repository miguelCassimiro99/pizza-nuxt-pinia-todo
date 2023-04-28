<script setup lang="ts">
import { useToDoStore } from '@/stores/todo'
import { IToDoItem } from '~~/types/to-do';

interface IToDoItemCard extends IToDoItem {}

// const props = defineProps({
//   id: { type: String, required: true },
//   finished: { type: Boolean, required: true },
//   description: { type: String, required: true },
//   projectName: { type: String, required: false },
// })

const props = defineProps<{todoItem: IToDoItem}>()

const store = useToDoStore()
const { toggleToDoItemFinished } = store
</script>
<template>
<div :class="`${props.todoItem.finished ? 'bg-dark-theme-secondary/40' : 'bg-dark-theme-secondary' } card rounded-lg w-full px-3 py-2 shadow-sm flex justify-start items-center gap-4 transition-all`">
  <input
    type="checkbox"
    class="w-7 h-7 accent-primary rounded-lg"
    :checked="props.todoItem.finished"
    @change="toggleToDoItemFinished(props.todoItem.id)"
  />
  <div>
    <h2 :class="`${props.todoItem.finished ? 'text-gray-700' : 'text-gray-100'} text-base font-semibold transition-all`">{{ props.todoItem.description }}</h2>
    <span :class="`${props.todoItem.finished ? 'text-primary/20' : 'text-primary' } text-xs transition-all`">{{ props.todoItem.project?.name || 'No project' }}</span>
  </div>
</div>
</template>
<style scoped>
</style>