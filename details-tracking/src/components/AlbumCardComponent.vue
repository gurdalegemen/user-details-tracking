<script>
export default {
    props:{
        album: Object,
    },
    methods: {
        navigateToPhotosPage(){
            this.$store.dispatch('setAlbumId', this.album.id);
            this.$router.push({name: "Photos", params: {id: this.album.id}});
        },
    },
}
</script>

<template>
    <div @click="navigateToPhotosPage" class="box-border border-2 rounded-md border-border flex flex-col px-4 pt-4 hover:shadow-xl hover:cursor-pointer">
        <div class="grid grid-cols-2 grid-rows-2 mb-2">
            <div v-for="item in album.photos" :key="item.id">
            <img class="h-full w-full" :src="item.thumbnailUrl" :alt="item.title">
            </div>
        </div>
        <span class="text-sm pb-2">{{album.title}}</span>
    </div>
</template>

<style scoped>
</style>