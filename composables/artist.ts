export function useArtist() {
  const artists = ref([]);
  const artist = ref({});
  const artistTopTracks = ref([]);
  const userFollowsArtist = ref(false);
  const fetchArtists = async () => {
    await $fetch("https://api.spotify.com/v1/me/top/artists?limit=10")
      .then((response: any) => {
        console.log(response.items, "res");
        artists.value = response.items;
      })
      .catch((response) => {
        console.log("Error fetching artists", response);
      });
  };

  const fetchArtist = async (id: String) => {
    await $fetch(`https://api.spotify.com/v1/artists/${id}`, {})
      .then((response: any) => {
        console.log(response, "res");
        artist.value = response;
      })
      .catch((response) => {
        console.log("Error fetching artists", response);
      });
  };

  const fetchArtistTopTracks = async (id: String) => {
    await $fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=PH`,
      {}
    )
      .then((response: any) => {
        console.log(response, "res");
        artistTopTracks.value = response;
      })
      .catch((response) => {
        console.log("Error fetching artists", response);
      });
  };

  const checkIfUserFollowsArtist = async (id: String) => {
    await $fetch(
      `https://api.spotify.com/v1/me/following/contains/?type=artist&ids=${id}`
    )
      .then((response: any) => {
        console.log(response, "res");
        userFollowsArtist.value = response[0];
      })
      .catch((response) => {
        console.log("Error fetching artists", response);
      });
  };

  const updateArtistFollowing = async (id: String, type: String) => {
    await $fetch(
      `https://api.spotify.com/v1/me/following/?type=artist&ids=${id}`,
      {
        method: type === "follow" ? "PUT" : "DELETE",
      }
    )
      .then((response: any) => {
        console.log(response, "res");
        userFollowsArtist.value = response[0];
      })
      .catch((response) => {
        console.log("Error fetching artists", response);
      });
  };

  return {
    artists,
    artist,
    userFollowsArtist,
    fetchArtists,
    fetchArtist,
    checkIfUserFollowsArtist,
    updateArtistFollowing,
    fetchArtistTopTracks,
  };
}
