export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof localStorage === "undefined") {
    return navigateTo("/");
  }
});
