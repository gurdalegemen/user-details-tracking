<script setup>
 import Footer from './FooterComponent.vue'
 import Tab from './TabComponent.vue'

</script>

<template>
    <div class="pt-10 h-full flex flex-col justify-between">
        <div class="bg-border">
            <div class="h-10 items-center">
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
