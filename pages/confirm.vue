<script setup lang="ts">
  const {data: {value}, error} = await useFetch("/api/user/create/post")
  if(error.value) {
    console.log("ERROR creating user at dtabase, retrying")
    await useFetch("/api/user/create/post")
  }
  const user = useSupabaseUser()
  watch([user], () => {
    if (user.value) {
      navigateTo('/')
    }
  }, {immediate: true,})

</script>
<template>
  <div>Waiting for login...</div>
</template>
