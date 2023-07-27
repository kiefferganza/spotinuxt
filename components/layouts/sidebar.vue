<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
      <ul class="space-y-2 font-medium">
        <li v-for="(item, index) in sidebarItems" :key="index">
          <a
            @click="router.push(item.href)"
            class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
            :class="{ 'bg-gray-200': route.path === item.href }"
          >
            <Icon name="bi:reception-4" color="black" />
            <span class="ml-3">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script setup>
import { usePlayback } from "@/composables/playback";
const { fetchCurrentPlaying, currentPlayback } = usePlayback();

onMounted(() => fetchCurrentPlaying());
const router = useRouter();
const route = useRoute();
const sidebarItems = [
  {
    title: "Top Artists",
    href: "/top/artists",
    icons: "bi:reception-4",
  },
  {
    title: "Top Tracks",
    href: "/top/tracks",
    icons: "bi:reception-4",
  },
];
</script>
