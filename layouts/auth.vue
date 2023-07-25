<template>
  <div>
    <layouts-header />
    <layouts-sidebar />
    <div class="container mx-auto">
      <slot />
      <layouts-footer class="sm:ml-64" />
    </div>
  </div>
</template>
