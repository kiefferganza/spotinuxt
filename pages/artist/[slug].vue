<template>
  <div class="sm:ml-64 mt-20">
    <ArtistProfile
      v-if="Object.keys(artist).length !== 0"
      :data="artist"
      :artist-followed-prop="userFollowsArtist"
    />
  </div>
</template>

<script setup>
import { useArtist } from "@/composables/artist";
definePageMeta({
  layout: "auth",
});

const route = useRoute();

const { artist, userFollowsArtist, fetchArtist, checkIfUserFollowsArtist } =
  useArtist();
onMounted(async () => {
  await fetchArtist(route.params.slug);
  await checkIfUserFollowsArtist(route.params.slug);
});
</script>
