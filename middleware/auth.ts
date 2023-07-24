export default defineNuxtRouteMiddleware((to, from) => {
  if (localStorage.getItem("token") === null) {
    console.log("here");
    return navigateTo("/");
  }
});
