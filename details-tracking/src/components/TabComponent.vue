<script>
    import UserIcon from './icons/User.vue'
    import TodoIcon from './icons/Todo.vue'
    import PostIcon from './icons/Post.vue'
    import AlbumIcon from './icons/Album.vue'
    import { ref } from 'vue';
    import { computed } from 'vue';

    export default {
    components: {
        UserIcon,
        TodoIcon,
        PostIcon,
        AlbumIcon,
    },
    setup() {
        const showUsersButton = ref(true);
        const showTodosButton = ref(true);
        const showPostsButton = ref(true);
        const showAlbumsButton = ref(true);

        return {
        showUsersButton,
        showTodosButton,
        showPostsButton,
        showAlbumsButton,
        };
    },
};
</script>



<template>
    <div class="flex flex-col">
        <div :style="{ backgroundColor: $route.name === 'Home' ? 'white' : '#D8D9DD'}" class=" flex text-18 h-10 mb-5 w-full items-center pl-8">
            <button v-if="$route.meta.showUsersButton" :style="{ backgroundColor: $route.name === 'Home' ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <UserIcon/>
                <span class="border-none text-primary">Users</span>
            </button>
        </div>
        <div :style="{ backgroundColor: $route.name === 'Todos' ? 'white' : '#D8D9DD'}"  class=" flex text-18 mb-5 h-10 w-full items-center pl-8">
            <button v-if="$route.meta.showTodosButton" :style="{ backgroundColor: $route.name === 'Todos' ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <TodoIcon/>
                <span class="border-none text-primary">ToDo</span>
            </button>
        </div>
        <div :style="{ backgroundColor: $route.name === 'Posts' ? 'white' : '#D8D9DD'}"  class=" flex text-18 mb-5 h-10 w-full items-center pl-8">
            <button v-if="$route.meta.showPostsButton" :style="{ backgroundColor: $route.name === 'Posts' ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <PostIcon/>
                <span class="border-none text-primary">Posts</span>
            </button>
        </div>
        <div :style="{ backgroundColor: $route.name === 'Albums' ? 'white' : '#D8D9DD'}" class=" flex text-18 h-10 w-full items-center pl-8">
            <button v-if="$route.meta.showAlbumsButton" :style="{ backgroundColor: $route.name === 'Albums' ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <AlbumIcon/>
                <span class="border-none text-primary">Albums</span>
            </button>
        </div>
    </div>
    
</template>

<style scoped>

</style>
