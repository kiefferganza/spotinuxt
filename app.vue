<template>
  <div>
    <layouts-sidebar v-if="isAuthenticated" />
    <div class="container mx-auto">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/store/authStore";
const { isAuthenticated } = useAuthStore();
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
