import { defineStore } from "pinia";
import { withQuery } from "ufo";

export const useArtistStore = defineStore("artist", () => {
  const artists = ref([]);

  const fetchArtists = async () => {
    await useFetch("https://api.spotify.com/v1/me/top/artists")
      .then((response: any) => {
        console.log(response, "res");
        artists.value = response.data.value.items;
      })
      .catch(() => {
        alert("Error fetching artists");
      });
  };

  return { artists, fetchArtists };
});
