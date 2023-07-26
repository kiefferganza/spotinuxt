export function usePlayback() {
  const currentPlayback = ref({});
  const playbackDevices = ref({});
  const isPlaying = ref(false);

  const fetchPlaybackDevices = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/devices`)
      .then((response: any) => {
        playbackDevices.value = response.devices;
      })
      .catch((response) => {});
  };

  const fetchCurrentPlaying = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/currently-playing`)
      .then((response: any) => {
        currentPlayback.value = response.item ?? {};
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

  const nextTrack = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/next`, {
      method: "POST",
    })
      .then((response: any) => {
        fetchCurrentPlaying();
      })
      .catch((response) => {});
  };

  const prevTrack = async () => {
    await $fetch(`https://api.spotify.com/v1/me/player/previous`, {
      method: "POST",
    })
      .then((response: any) => {
        fetchCurrentPlaying();
      })
      .catch((response) => {});
  };

  return {
    currentPlayback,
    isPlaying,
    playbackDevices,
    fetchCurrentPlaying,
    fetchPlaybackDevices,
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
  };
}
