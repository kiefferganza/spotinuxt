<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <Auth @login="login" />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
import { useAuthStore } from "@/store/authStore";
const { isAuthenticated, authorize } = useAuthStore();

const login = () => {
  authorize();
};
// onMounted(() => {
//   authorize();
// });
</script>
