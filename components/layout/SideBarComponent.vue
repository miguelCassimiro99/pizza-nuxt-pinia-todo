<script setup lang="ts">
import { useUiStore } from '@/stores/ui';
const uiStore = useUiStore()

</script>
<template>
  <aside class="sidebar-layout h-[10vh] md:h-full w-full md:w-[20vw] lg:w-[25vw] flex md:flex-col justify-start items-center bg-dark-theme-secondary space-y-0 md:space-y-10 md:py-20 shadow-2xl px-4 border border-dark-theme-secondary">
    <LayoutLogoComponent />

    <div class="flex md:flex-col justify-center md:justify-start gap-4 flex-1">
      <NuxtLink
        v-for="(item, index) in uiStore.menu.menuItems"
        :key="index"
        :to="item.url"
        class="flex justify-start cursor-pointer items-center w-fit space-x-4 md:w-full px-3 py-2 hover:bg-dark-theme rounded-xl focus:bg-primary"
      >
        <Icon
          :name="`${item.icon}`"
          class="xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-gray-100"
        />
        <span class="text-xs sm:text-sm text-gray-100 font-semibold">{{ item.label }}</span>
      </NuxtLink>
      <!-- <NuxtLink
        to="/"
        class="flex justify-start cursor-pointer items-center w-fit space-x-4 md:w-full px-3 py-2 hover:bg-dark-theme rounded-xl focus:bg-primary"
      >
        <Icon
          name="solar:checklist-minimalistic-broken"
          class="xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-gray-100"
        />
        <span class="text-xs sm:text-sm text-gray-100 font-semibold">ToDos</span>
      </NuxtLink>

      <NuxtLink
        to="/projects"
        class="flex justify-start items-center w-fit space-x-4 md:w-full px-3 py-2 hover:bg-dark-theme rounded-xl focus:bg-primary"
      >
        <Icon
          name="eos-icons:project-outlined"
          class="xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-gray-100"
        />
        <span class="text-xs sm:text-sm text-gray-100 font-semibold">Projects</span>
      </NuxtLink> -->

    </div>
  </aside>
</template>
<style>
a.router-link-active {
  background: #3B82F6;
}

a.router-link-exact-active {
  background: #3B82F6;
}
</style>