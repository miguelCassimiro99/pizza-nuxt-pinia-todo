<script setup lang="ts">
import { useToDoStore } from '@/stores/todo'
import { useUiStore } from '@/stores/ui'
import { IToDoItem } from '~~/types';
interface IToDoItemCard extends IToDoItem {}

// const props = defineProps({
//   id: { type: String, required: true },
//   finished: { type: Boolean, required: true },
//   description: { type: String, required: true },
//   projectName: { type: String, required: false },
// })

const uiStore = useUiStore()
const props = defineProps<{todoItem: IToDoItem}>()

const store = useToDoStore()
const { toggleToDoItemFinished, deleteTodoItem, setOnChangeTodo } = store

const startEditToDo = (todo: IToDoItem) => {
  setOnChangeTodo(todo);
  uiStore.openModal()
}

</script>
<template>
<div
  :class="`${props.todoItem.finished ? 
    'bg-dark-theme-secondary/40' : 'bg-dark-theme-secondary' } 
    card rounded-lg w-full px-3 py-2 shadow-sm flex justify-between items-center gap-4 transition-all max-w-xl`"
  >
  <div class="flex justify-center items-center gap-3">
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
  <div class="flex justify-center gap-4">
    <button
      @click="startEditToDo(props.todoItem)"
      class="w-6 h-6 md:w-8 md:h-8 shadow-md shadow-dark-theme rounded-full bg-primary text-white flex justify-center items-center">
      <Icon name="ic:baseline-mode-edit" />
    </button>
    <button
      @click="deleteTodoItem(props.todoItem.id)"
      class="w-6 h-6 md:w-8 md:h-8 shadow-md shadow-dark-theme rounded-full bg-pink-700 text-white flex justify-center items-center"
    >
      <Icon name="ic:round-delete" />
    </button>
  </div>
</div>
</template>
<style scoped>
</style>