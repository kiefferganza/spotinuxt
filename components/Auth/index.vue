<template>
  <div
    class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6"
  >
    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl">
      Log In to Spotify
    </h5>
    <ul class="my-4 space-y-3">
      <li>
        <a
          @click="login"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-green-500 hover:bg-gray-50 group cursor-pointer"
        >
          <span class="flex-1 text-center text-white whitespace-nowrap"
            >Login</span
          >
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
const emit = defineEmits(["login"]);

const login = () => {
  emit("login");
};
</script>
