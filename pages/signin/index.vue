<script setup lang="ts">
    const {signIn, data} = useAuth()
    watch(data, () => {
        console.log(data.value)
    })
</script>

<template>
    <div>
        Sign in now
        <button @click="() => signIn('github')">Sign in with Github</button>
    </div>
</template>