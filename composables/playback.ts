export function usePlayback() {
  const currentPlayback = ref({});
  const isPlaying = ref(false);

  const fetchCurrentPlaying = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/currently-playing`)
      .then((response: any) => {
        currentPlayback.value = response.item;
        isPlaying.value = response.is_playing;
      })
      .catch((response) => {});
  };

  const playTrack = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/play`, {
      method: "PUT",
    })
      .then((response: any) => {
        fetchCurrentPlaying();
      })
      .catch((response) => {});
  };
  const pauseTrack = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/pause`, {
      method: "PUT",
    })
      .then((response: any) => {
        fetchCurrentPlaying();
      })
      .catch((response) => {});
  };

  return {
    currentPlayback,
    isPlaying,
    fetchCurrentPlaying,
    playTrack,
    pauseTrack,
  };
}
