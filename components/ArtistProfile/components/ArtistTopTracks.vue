<template>
  <div class="text-5xl font-bold tracking-tight text-black mb-5">
    Artist Top Tracks
  </div>

  <div
    class="flex w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto"
  >
    <div class="flex flex-col w-full gap-2">
      <div
        v-for="(tracks, index) in artistTopTracks"
        :key="index"
        class="flex p-5 border-b"
      >
        <img
          class="w-20 h-20 object-cover"
          alt="Track avatar"
          :src="tracks?.album?.images[0]?.url"
        />
        <div class="flex flex-col px-2 w-full">
          <span class="text-sm text-green-500 capitalize font-semibold pt-1">
            {{ tracks.name }}
          </span>
          <span class="text-xs text-gray-500 uppercase font-medium">
            {{ tracks.album.name }}
          </span>
        </div>
        <div class="group">
          <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
            >Play in app</span
          >
          <button
            @click="playInapp(tracks.uri)"
            class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 focus:outline-none mt-3"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="black"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useArtist } from "@/composables/artist";
const route = useRoute();

const { artistTopTracks, fetchArtistTopTracks } = useArtist();
const playInapp = (uri) => {
  navigateTo(uri, {
    open: {
      target: "_blank",
    },
  });
};

onMounted(async () => {
  await fetchArtistTopTracks(route.params.slug);
});
</script>
