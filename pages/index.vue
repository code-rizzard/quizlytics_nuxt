
<script setup lang="ts">

    definePageMeta({
        middleware: ["auth"]
    })

    const user = useSupabaseUser()
    
</script>

<template>
    <div>
        {{user}}
    </div>
</template>