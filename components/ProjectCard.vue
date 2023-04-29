<script setup lang="ts">
import { useProjectsStore } from '~~/stores/projects';
import { IProject, IToDoItem } from '~~/types';
interface IToDoItemCard extends IToDoItem {}

const props = defineProps<{project: IProject}>()
const projectStore = useProjectsStore()
const { deleteProject } = projectStore;

</script>
<template>
<div
  class=" 
    card bg-dark-theme-secondary rounded-lg w-full px-3 py-2 shadow-sm flex justify-between items-center gap-4 transition-all max-w-xl"
  >
  <div class="flex justify-center items-center gap-3">
    <div>
      <h2 class=" text-gray-100 text-base font-semibold transition-all">{{ props.project.name }}</h2>
    </div>

  </div>
  <div class="flex justify-center gap-4">
    <button
      @click="deleteProject(props.project.id)"
      class="w-6 h-6 md:w-8 md:h-8 shadow-md shadow-dark-theme rounded-full bg-pink-700 text-white flex justify-center items-center"
    >
      <Icon name="ic:round-delete" />
    </button>
  </div>
</div>
</template>
<style scoped>
</style>