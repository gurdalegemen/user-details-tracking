<script>
   export default {
    props: {
        todo: Object,
    },
   
   }

</script>

<template>
    <div class="h-12 flex items-center pl-2">
        <input type="checkbox" class="w-4 h-4 accent-primary" v-model="todo.completed">
        <p class="pl-5 text-sm capitalize">{{todo.title}}</p>
    </div>
</template>

<style scoped>
    
</style>
