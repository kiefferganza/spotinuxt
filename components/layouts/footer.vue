<template>
  <footer
    v-if="Object.keys(currentPlayback).length > 0"
    class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 z-99"
  >
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
        <div class="flex flex-col gap-1 mx-5 align-items-start">
          <div class="text-green-500 text-xl">
            {{ currentPlayback.name }}
          </div>
          <div class="">Now Playing on {{ currentDevice }}</div>
        </div>
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <button
            @click="prevTrack"
            type="button"
            class="mr-4 hover:underline md:mr-6"
          >
            Prev
          </button>
        </li>
        <li>
          <button
            @click="setPlayBackState"
            type="button"
            class="mr-4 hover:underline md:mr-6"
          >
            {{ isPlaying ? "Pause" : "Play" }}
          </button>
        </li>
        <li>
          <button
            @click="nextTrack"
            type="button"
            class="mr-4 hover:underline md:mr-6"
          >
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
  playbackDevices,
  fetchCurrentPlaying,
  fetchPlaybackDevices,
  playTrack,
  pauseTrack,
  nextTrack,
  prevTrack,
} = usePlayback();

const setPlayBackState = () => {
  if (isPlaying.value === true) {
    pauseTrack();
  } else {
    playTrack();
  }
};

onMounted(async () => {
  await fetchCurrentPlaying();
  await fetchPlaybackDevices();
});

const currentDevice = computed(() => {
  return playbackDevices.value.length > 0
    ? playbackDevices?.value?.find((e) => e.is_active === true).name
    : {};
});
</script>
