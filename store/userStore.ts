import { defineStore } from "pinia";
import { withQuery } from "ufo";

export const useUserStore = defineStore("user", () => {
  const user = ref<Object>({});

  const fetchLoggedInUser = async () => {
    await $fetch(`https://api.spotify.com/v1/me`, {})
      .then((response: any) => {
        user.value = response;
      })
      .catch((response) => {});
  };

  return { user, fetchLoggedInUser };
});
