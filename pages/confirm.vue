<script setup lang="ts">
    const user = useSupabaseUser()

    definePageMeta({
      middleware: [
        async function(to, from) {
          const {code} = to.params
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


    watch([user], async () => {
      async function doSomething() {
        
        const val = await $fetch("/api/users/create", {method: "POST"})
        if (val.success ) {
          navigateTo('/')
        }
      }
      if(process.server) {return}
      doSomething()
    }, {immediate: true,})

</script>
<template>
  <div>Waiting for login...</div>
</template>
