<script setup lang="ts">
import { useToDoStore  } from '@/stores/todo'

const todoDescription = ref("")
const store = useToDoStore();

async function onSubmit() {
  store.addToDoItem(todoDescription.value);
}

</script>
<template>
<nav class="flex h-auto md:h-16 w-fit bg-dark-theme-secondary px-2 md:px-10 py-1 rounded-xl shadow-lg shadow-dark-theme-secondary mb-10">
  <form  @submit.prevent="onSubmit()" class="w-fit flex flex-col md:flex-row items-center py-2 justify-center gap-4">
    <input type="text" class="rounded-lg h-10 text-dark-theme-secondary px-2" v-model="todoDescription" />
    <button
      type="submit"
      class="rounded-lg shadow-lg shadow-dark-theme-secondary w-10 h-10 bg-gradient-to-r from-purple-700 to-pink-600 flex justify-center items-center"
    >
      <Icon name="material-symbols:add-rounded" class="text-white w-10 h-10" />
    </button>
  </form>

</nav>
</template>
<style scoped>
</style>