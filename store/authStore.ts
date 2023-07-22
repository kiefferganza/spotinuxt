import { defineStore } from "pinia";
import { withQuery } from "ufo";

export const useAuthStore = defineStore("auth", () => {
  const config = useRuntimeConfig();
  const isAuthenticated = ref<Boolean>(false);
  const authCreds = ref<Object>({
    access_token: "",
    token_type: "",
    scope: "",
    expires_in: null,
    refresh_token: "",
  });
  const authorize = () => {
    navigateTo(
      withQuery("https://accounts.spotify.com/authorize?", {
        response_type: "code",
        client_id: config.public.CLIENT_ID,
        scope: "user-read-private user-read-email",
        redirect_uri: config.public.CALLBACK_URL,
        state: (Math.random() + 1).toString(36).substring(7),
      }),
      {
        external: true,
      }
    );
  };

  const requestAccessToken = (authCode: String) => {
    const authHeader = `${config.public.CLIENT_ID}:${config.public.CLIENT_SECRET}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(authHeader);
    const base64 = btoa(String.fromCharCode(...data));

    useFetch(`https://accounts.spotify.com/api/token`, {
      onRequest({ request, options }) {
        // Set the request headers
        //@ts-ignore
        options.headers = options.headers || {};
        //@ts-ignore
        options.headers.authorization = `Basic ${base64}`;
        //@ts-ignore
        options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      },
      method: "POST",
      query: {
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri: config.public.CALLBACK_URL,
      },
    })
      .then((response: any) => {
        isAuthenticated.value = true;
        authCreds.value = response.data.value;
        console.log(response.data.value);
        localStorage.setItem("token", authCreds.value.access_token);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return { isAuthenticated, authCreds, authorize, requestAccessToken };
});
