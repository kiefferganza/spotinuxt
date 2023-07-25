<template>
  <h1></h1>
</template>
<script setup>
import { useAuthStore } from "@/store/authStore";

definePageMeta({
  layout: "default",
});

const { requestAccessToken, authCreds } = useAuthStore();
const route = useRoute();

requestAccessToken(route.query.code || null);
</script>
