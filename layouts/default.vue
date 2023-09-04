<script setup lang="ts">
import { useUser } from '~/store/useUserStore';

useHead({
        title: "Quizlytics",
        meta: [
            {
                name: "description",
                content: "Fueling your quest for knowledge through interactive exploration and insightful analysis."
            }
        ]
    })

    useUser().initialize()
</script>


<template>
    <Head>
        <Title>Quizlytics</Title>
    </Head>
    <Header />
    <slot/>
    <Footer/>
</template>