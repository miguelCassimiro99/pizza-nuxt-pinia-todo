<script setup lang="ts">
const props = defineProps({
  finished: { type: Boolean, required: true }
})

//const baseStyle = 'card rounded-lg w-full bg-dark-theme-secondary px-3 py-2 shadow-sm flex justify-start items-center gap-4'
</script>
<template>
<div :class="`${finished ? 'bg-dark-theme-secondary/40' : 'bg-dark-theme-secondary' } card rounded-lg w-full px-3 py-2 shadow-sm flex justify-start items-center gap-4 transition-all`">
  <input type="checkbox" class="w-7 h-7 accent-primary rounded-lg" :checked="finished" />
  <div>
    <h2 :class="`${finished ? 'text-gray-700' : 'text-gray-100'} text-base font-semibold transition-all`">Estudar Node</h2>
    <span :class="`${finished ? 'text-primary/20' : 'text-primary' } text-xs transition-all`">UmDois Esportes</span>
  </div>
</div>
</template>
<style scoped>
</style>