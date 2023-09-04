<script setup lang="ts">
    const user = useSupabaseUser()

    definePageMeta({
      middleware: [
        async function(to, from) {
          const {code} = to.query
          if(!code) {
            return navigateTo('/')
          }
          const data = await $fetch(`/api/users/${code}`, {retry: 4}) as any
          if((data as any).success) {
            return navigateTo('/')
          }
        }
      ]
    })


    if(process.client) {
        const val = await $fetch("/api/users/create", {method: "POST"})
        if (val.success ) {
          navigateTo('/')
        }
    }



</script>
<template>
  <div>Waiting for login...</div>
</template>
