<script setup lang="ts">
import { useToDoStore } from '@/stores/todo';

const store = useToDoStore();

onMounted(async () => {
  store.getTodoList();
})

let progress = computed(() => {
  const done = store.todo.todos.filter(item => item.finished).length
  return ((done / store.todo.todos.length) * 100).toFixed(2)
})


</script>
<template>
<div class="flex flex-col px-4 items-center justify-start gap-4">
  <div v-if="store.todo.todos.length">
    <span class="text-sm font-semibold">Concluded {{ progress || 0 }} %</span>
  </div>
  <div class="flex flex-col gap-4 overflow-y-auto">
    <ToDoItemCard
      v-for="(todo, index) in store.todo.todos"
      :todo-item="todo"
    />

  </div>
</div>

</template>
<style scoped>
</style>