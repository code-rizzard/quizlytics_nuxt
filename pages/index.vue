
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~/store/useUserStore';


    definePageMeta({
        middleware: ["authenticate"]
    })

    const store = useUser()

    const {supabase : user} = storeToRefs(store)
</script>

<template>
    <div v-if="user != null">
        <img :src="user.user_metadata.avatar_url" />
        {{ user.email }}
    </div>
</template>