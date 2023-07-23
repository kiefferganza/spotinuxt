export function useArtist() {
  const artists = ref([]);
  const artist = ref({});
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

  return { artists, artist, fetchArtists, fetchArtist };
}
