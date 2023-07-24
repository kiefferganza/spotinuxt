<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 z-99">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span
        class="flex text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >
        <img
          class="w-20 h-20 object-cover"
          alt="Track avatar"
          :src="currentPlayback?.album?.images[0]?.url"
        />
        <div class="flex flex-col gap-0 mx-5 my-5 align-items-start">
          <div class="text-green-500">Now Playing</div>

          <div>{{ currentPlayback.name }}</div>
        </div>
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <button type="button" class="mr-4 hover:underline md:mr-6">
            Prev
          </button>
        </li>
        <li>
          <button
            @click="setPlayBackState"
            type="button"
            class="mr-4 hover:underline md:mr-6"
          >
            Play
          </button>
        </li>
        <li>
          <button type="button" class="mr-4 hover:underline md:mr-6">
            Next
          </button>
        </li>
        <li></li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
import { usePlayback } from "@/composables/playback";

const {
  currentPlayback,
  isPlaying,
  fetchCurrentPlaying,
  playTrack,
  pauseTrack,
} = usePlayback();

const setPlayBackState = () => {
  if (isPlaying.value === true) {
    pauseTrack();
  } else {
    playTrack();
  }
};

onMounted(async () => await fetchCurrentPlaying());
</script>
