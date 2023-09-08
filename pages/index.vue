
<script setup lang="ts">
    definePageMeta({
        middleware: [
            "auth"
        ]
    })
    const {data} = useAuth()
</script>

<template>
    <div v-if="data?.user">
        Hello {{ data.user.email }} 
    </div>
</template>