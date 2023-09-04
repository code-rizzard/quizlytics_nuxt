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
      const user = await useSupabaseUser();
      if (!user.value) {
        console.log("NO USER FOUND");
        return;
      }
      const supabaseId = user.value.id;
      const res = (await $fetch(`/api/users/${supabaseId}`)) as any;
      this.supabase = user.value;
      this.database = res.data;
    },
  },
});
