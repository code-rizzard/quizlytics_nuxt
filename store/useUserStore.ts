import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: (): {
    supabase: Record<string, any> | null;
    database: Record<string, any> | null;
  } => ({
    supabase: null,
    database: null,
  }),
  actions: {
    async initialize() {
      console.log("INITIALIZING THE USER STORE");
      const user = await useSupabaseUser();
      if (!user.value) {
        console.log("NO USER FOUND");
        return;
      }
      console.log("SUPABASE USER", user.value);
      console.log("FETCHING THE USER WITH ID -> ", user.data.user.id);
      const res = (await $fetch(`/api/users/${user.data.user.id}`)) as any;
      this.supabase = user.data.user;
      this.database = res.data.data;
      console.log("initialized ", this.supabase);
    },
  },
});
