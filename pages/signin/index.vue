<script setup lang="ts">
import { SupportedProviders } from '@sidebase/nuxt-auth/dist/runtime/composables/authjs/useAuth';
    definePageMeta({
        middleware: [
            "no-auth"
        ]
    })
    const {signIn, data} = useAuth()
    watch(data, () => {
        console.log(data.value)
    })
    function handleSignin(prov : SupportedProviders) {
        signIn(prov, {callbackUrl: "/signin/confirm"})
    }
</script>

<template>
    <div>
        Sign in now
        <button @click="handleSignin('google')">Sign in with Google</button>
    </div>
</template>