<template>
  <div class="sm:ml-64 mt-20">
    <ArtistProfile v-if="Object.keys(artist).length !== 0" :data="artist" />
  </div>
</template>

<script setup>
import { useArtist } from "@/composables/artist";

const route = useRoute();

const { artist, userFollowsArtist, fetchArtist, checkIfUserFollowsArtist } =
  useArtist();
onMounted(async () => {
  await fetchArtist(route.params.slug);
  await checkIfUserFollowsArtist(route.params.slug);
});
</script>
