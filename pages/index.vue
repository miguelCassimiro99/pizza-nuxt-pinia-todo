<script setup lang="ts">
import { IToDoItem } from '~~/types/to-do';


const todoItems = [
  {
    id: 'fwwewere',
    description: 'Estudar Node',
    finished: true,
    project: {
      id: '2reer',
      name: 'UmDois Esportes'
    }
  },
  {
    id: 'ewriwor',
    description: 'Estudar Node',
    finished: true,
    project: {
      id: '2reer',
      name: 'UmDois Esportes'
    }
  }

] as IToDoItem[]

</script>
<template>
<section class="relative h-full overflow-y-auto">
  <h2 class="text-2xl mb-10 font-bold md:hidden">ToDo List</h2>
  <div class="flex w-full justify-center">
    <LayoutNavbarComponent />
  </div>
  
  <button
    class="absolute right-0 bottom-0 rounded-full shadow-lg shadow-dark-theme-secondary w-16 h-16 md:hidden bg-gradient-to-r from-purple-700 to-pink-600 flex justify-center items-center"
  >
    <Icon name="material-symbols:add-rounded" class="text-white w-10 h-10" />
  </button>

  <div class="flex flex-col px-4 items-center justify-start gap-4">

    <ToDoItemCard :finished="true" />
    <ToDoItemCard :finished="false" />
  </div>

</section>


</template>
<style scoped>
</style>