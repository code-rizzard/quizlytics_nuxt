<script setup lang="ts">
    const {data} = useAuth()
    watch(data, () => {
        if(data.value?.user !== undefined) {
            return navigateTo('/')
        }
    }, {immediate : true})
</script>


<template>
    <div>
        Logging in!
    </div>
</template>