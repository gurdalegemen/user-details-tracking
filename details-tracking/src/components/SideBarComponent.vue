<script setup>
 import Footer from './FooterComponent.vue'
 import Tab from './TabComponent.vue'

</script>

<template>
    <div class="h-full flex flex-col pt-8 justify-between">
        <div class="bg-border">
            <div :style="{marginTop: $route.name !== 'Home' ? '64px' : '0'}" class="h-10 items-center ">
                <Tab/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
</template>

<style scoped>

</style>
