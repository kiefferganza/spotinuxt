export function usePlayback() {
  const currentPlayback = ref({});

  const fetchCurrentPlaying = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/currently-playing`)
      .then((response: any) => {
        currentPlayback.value = response.item;
      })
      .catch((response) => {});
  };

  return {
    currentPlayback,
    fetchCurrentPlaying,
  };
}
