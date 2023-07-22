<template>
  <h1>test</h1>
</template>
<script setup>
import { useAuthStore } from "@/store/authStore";
const { isAuthenticated, authorize } = useAuthStore();

onMounted(() => {
  authorize();
});
</script>
