<template>
  <div class="sm:ml-64 mt-16">
    <div class="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-5">
      Your Top Artists
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
      <Artists v-for="(artist, index) in artists" :data="artist" :key="index" />
    </div>
  </div>
</template>
<script setup>
import { useArtist } from "@/composables/artist";
import { useAuthStore } from "@/store/authStore";
definePageMeta({
  layout: "auth",
});

const { artists, fetchArtists } = useArtist();
const { requestAccessToken, authCreds } = useAuthStore();
const artistList = ref([]);

watch(artists, (newValue) => {
  artistList.value = newValue;
});
onMounted(async () => {
  await fetchArtists();
});
</script>
