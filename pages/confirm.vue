<script setup lang="ts">

  await useFetch("/api/user/create/post")
  navigateTo('/')

</script>
<template>
  <div>Waiting for login...</div>
</template>
