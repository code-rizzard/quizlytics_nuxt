
<script setup lang="ts">
    definePageMeta({
        middleware: [
            "auth"
        ]
    })
    const {userData} = useUserAuth()
</script>

<template>
    <div v-if="userData">
        Hello {{ userData.user?.id }} 
    </div>
</template>