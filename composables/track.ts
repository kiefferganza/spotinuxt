export function useTracks() {
  const topTracks = ref([]);

  const fetchTopTracks = async () => {
    await $fetch("https://api.spotify.com/v1/me/top/tracks?limit=10")
      .then((response: any) => {
        topTracks.value = response.items;
      })
      .catch((response) => {});
  };

  return {
    topTracks,
    fetchTopTracks,
  };
}
