<template>
  <div class="h-screen max-h-screen w-[100vw] max-w-[100vw] flex flex-col-reverse md:flex-row overflow-hidden">
    <LayoutSideBarComponent />

    <main class="bg-dark-theme w-full px-4 py-8 h-full text-gray-100 overflow-hidden">
      <slot />

    </main>
  </div>
</template>
