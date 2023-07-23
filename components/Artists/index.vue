<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
    @click="gotoArtist(data.external_urls.spotify)"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="data.images[0].url" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ data.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const gotoArtist = (url) => {
  navigateTo(url, {
    open: {
      target: "_blank",
    },
  });
};

const randomIntegerBetween0And2Rounded = () => {
  // Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Converts the decimal number to a number between 0 (inclusive) and 2 (exclusive)
  const randomNumberBetween0And2 = randomDecimal * 2;

  // Rounds the number to the nearest integer
  const roundedNumber = Math.round(randomNumberBetween0And2);

  return roundedNumber;
};
</script>
