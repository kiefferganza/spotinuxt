export function useArtist() {
  const artists = ref([]);
  const artist = ref({});
  const artistTopTracks = ref([]);
  const userFollowsArtist = ref(false);
  const fetchArtists = async () => {
    await $fetch("https://api.spotify.com/v1/me/top/artists?limit=10")
      .then((response: any) => {
        artists.value = response.items;
      })
      .catch((response) => {});
  };

  const fetchArtist = async (id: String) => {
    await $fetch(`https://api.spotify.com/v1/artists/${id}`, {})
      .then((response: any) => {
        artist.value = response;
      })
      .catch((response) => {});
  };

  const fetchArtistTopTracks = async (id: String) => {
    await $fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=PH`,
      {}
    )
      .then((response: any) => {
        artistTopTracks.value = response.tracks;
      })
      .catch((response) => {});
  };

  const checkIfUserFollowsArtist = async (id: String) => {
    await $fetch(
      `https://api.spotify.com/v1/me/following/contains/?type=artist&ids=${id}`
    )
      .then((response: any) => {
        userFollowsArtist.value = response[0];
      })
      .catch((response) => {});
  };

  const updateArtistFollowing = async (id: String, type: String) => {
    await $fetch(
      `https://api.spotify.com/v1/me/following/?type=artist&ids=${id}`,
      {
        method: type === "follow" ? "PUT" : "DELETE",
      }
    )
      .then((response: any) => {
        userFollowsArtist.value = response[0];
      })
      .catch((response) => {});
  };

  return {
    artists,
    artist,
    userFollowsArtist,
    artistTopTracks,
    fetchArtists,
    fetchArtist,
    checkIfUserFollowsArtist,
    updateArtistFollowing,
    fetchArtistTopTracks,
  };
}
