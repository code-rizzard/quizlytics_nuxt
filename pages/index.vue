
<script setup lang="ts">

    definePageMeta({
        middleware: ["authenticate"]
    })

    const user = useSupabaseUser()
    
</script>

<template>
    <div>
        {{user}}
    </div>
</template>