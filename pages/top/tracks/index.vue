<template>
  <div class="sm:ml-64 mt-16">
    <div class="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-5">
      Your Top Tracks
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
      <Artists v-for="(artist, index) in artists" :data="artist" :key="index" />
    </div>
  </div>
</template>
<script setup>
import { useTracks } from "@/composables/track";
definePageMeta({
  layout: "auth",
});

const { topTracks, fetchTopTracks } = useTracks();
const artistList = ref([]);

onMounted(async () => {
  await fetchTopTracks();
});
</script>
