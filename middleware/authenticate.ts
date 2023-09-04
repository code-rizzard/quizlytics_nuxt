export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) return;
  const user = await useSupabaseClient().auth.getUser();
  if (user.data.user == undefined && to.path !== "/landing") {
    return navigateTo("/landing");
  }
});
