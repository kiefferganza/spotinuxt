<template>
  <div
    class="drop-shadow-xl max-w-sm bg-white rounded-lg shadow hover:bg-gray-100 hover:border-b-4 border-green-500"
  >
    <img class="rounded-t-lg" :src="data.images[0].url" alt="" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ data.name }}
      </h5>
      <div class="grid grid-cols-2 gap-2">
        <a
          @click="gotoArtist(data.uri, 'internal', data.id)"
          class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Artist Profile
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          class="cursor-pointer text-sm py-2 hover:text-underline hover:text-sky-200"
          @click="gotoArtist(data.uri, 'external')"
        >
          view in app
        </a>
      </div>
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
const router = useRouter();

const gotoArtist = (url, type, id = null) => {
  if (type === "external") {
    navigateTo(url, {
      open: {
        target: "_blank",
      },
    });
  }
  if (type === "internal") {
    router.push(`/artist/${id}`);
  }
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
