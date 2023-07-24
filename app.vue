<template>
  <div>
    <layouts-sidebar v-if="isAuth" />
    <div class="container mx-auto">
      <NuxtPage />
      <layouts-footer class="sm:ml-64" />
    </div>
  </div>
</template>
<script setup>
const isAuth = () => localStorage.getItem("token") === null;
</script>
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
