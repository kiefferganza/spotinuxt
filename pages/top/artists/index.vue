<template>
  <div class="">
    <Artists v-for="artist in artists" />
  </div>
</template>
<script setup>
import { useArtist } from "@/composables/artist";
import { useAuthStore } from "@/store/authStore";

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
