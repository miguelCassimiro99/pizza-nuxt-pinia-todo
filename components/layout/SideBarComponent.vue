<script setup lang="ts">
const navOptions = [
  {
    url: '/',
    icon: 'solar:checklist-minimalistic-broken',
    label: 'ToDo List'
  },
  {
    url: '/projects',
    icon: 'eos-icons:project-outlined',
    label: 'Projects'
  },
]
</script>
<template>
  <aside class="h-[10vh] md:h-full w-full md:w-[20vw] lg:w-[25vw] flex md:flex-col justify-start items-center bg-dark-theme-secondary space-y-0 md:space-y-10 md:py-20 shadow-2xl px-4 border border-dark-theme-secondary">
    <LayoutBrandComponent />

    <button
      class=""
    >

    </button>
    <div class="flex md:flex-col justify-center md:justify-start gap-4 flex-1">

      <NuxtLink
        v-for="(nav, index) in navOptions"
        :key="index"
        :href="nav.url"
        class="flex justify-start items-center w-fit space-x-4 md:w-full px-3 py-2 hover:bg-dark-theme rounded-xl focus:bg-primary"
      >
        <Icon
          :name="nav.icon"
          class="xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-gray-100"
        />
        <span class="text-xs sm:text-sm text-gray-100 font-semibold">{{ nav.label }}</span>
      </NuxtLink>

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