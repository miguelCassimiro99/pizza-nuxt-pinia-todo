<script setup lang="ts">
import { useProjectsStore } from '~~/stores/projects';

const projectsStore = useProjectsStore()

onMounted( async () => {
  await projectsStore.getProjectList();
})
</script>
<template>
<div class="flex flex-col px-4 items-center justify-start gap-4">
  <ProjectCard
    v-for="(project, index) in projectsStore.project.projects"
    :project="project"
  />
</div>
</template>
<style scoped>
</style>