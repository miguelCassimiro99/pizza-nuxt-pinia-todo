<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)

function setIsOpen(value: boolean) {
  isOpen.value = value
}
</script>
<template>
  <Dialog :open="true" @close="setIsOpen">
    <DialogPanel>
      <DialogTitle>Deactivate account</DialogTitle>
      <DialogDescription>
        This will permanently deactivate your account
      </DialogDescription>

      <p>
        Are you sure you want to deactivate your account? All of your data will be
        permanently removed. This action cannot be undone.
      </p>

      <button @click="setIsOpen(false)">Deactivate</button>
      <button @click="setIsOpen(false)">Cancel</button>
    </DialogPanel>
  </Dialog>
</template>
<style scoped>
</style>