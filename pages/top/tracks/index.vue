<template>
  <div class="sm:ml-64 mt-16">
    <div class="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-5">
      Your Top Tracks
    </div>
    <div class="">
      <TopTracks :data="topTracks" />
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
