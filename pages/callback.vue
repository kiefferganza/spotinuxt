<template>
  <h1></h1>
</template>
<script setup>
import { useAuthStore } from "@/store/authStore";

const { requestAccessToken, authCreds } = useAuthStore();
const route = useRoute();

requestAccessToken(route.query.code || null);
</script>
