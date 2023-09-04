
<script setup lang="ts">

    definePageMeta({
        middleware: ["authenticate"]
    })

    const user = useSupabaseUser()
</script>

<template>
    <div>
        <img :src="user.user_metadata.avatar_url" />
        {{ user.email }}
    </div>
</template>