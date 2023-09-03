export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) return;
  const user = useSupabaseUser();
  if (user.value == undefined && to.path !== "/landing") {
    return navigateTo("/landing");
  }
});
