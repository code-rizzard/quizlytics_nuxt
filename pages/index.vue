
<script setup lang="ts">
    definePageMeta({
        middleware: [
            function(to, from) {
                const {data} = useAuth()
                if(data.value?.user == null) {
                    return navigateTo('/signin')
                }
            }
        ]
    })
    const {data} = useAuth()
    console.log(data.value?.user)
</script>

<template>
    <div v-if="data?.user">
        Hello {{ data.user.email }} 
    </div>
</template>