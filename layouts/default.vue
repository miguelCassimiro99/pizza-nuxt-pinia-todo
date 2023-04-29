<template>
  <div class="h-screen max-h-screen w-[100vw] max-w-[100vw] flex flex-col-reverse md:flex-row overflow-hidden">
    <ClientOnly>
      <LayoutSideBarComponent />

    </ClientOnly>

    <main class="relative bg-dark-theme w-full px-4 py-8 h-full text-gray-100 overflow-hidden">
      <slot />

    </main>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
