<script>
    import UserIcon from './icons/User.vue'
    import TodoIcon from './icons/Todo.vue'
    import PostIcon from './icons/Post.vue'
    import AlbumIcon from './icons/Album.vue'
    import { ref, onMounted } from "vue";
    import { useStore } from 'vuex';
    import router from '../router';


    export default {

    setup() {
        const showUsersButton = ref(true);
        const showTodosButton = ref(true);
        const showPostsButton = ref(true);
        const showAlbumsButton = ref(true);
        const url = '';

        const store = useStore();
        let userIdFromStore = ref(null);
        
        onMounted(() => {
            userIdFromStore = store.getters.getUserId

        })
        function navigateToTodos(){
            // this.$store.dispatch('setUserId', userIdFromStore);
            // this.$router.push({ name: "Posts", params: { id: userIdFromStore }});
            router.push({ name: "Todos", params: { id: userIdFromStore }});
        }
        function navigateToAlbums(){
            // this.$store.dispatch('setUserId', userIdFromStore);
            // this.$router.push({ name: "Posts", params: { id: userIdFromStore }});
            router.push({ name: "Albums", params: { id: userIdFromStore }});
        }
        function navigateToPosts(){
            // this.$store.dispatch('setUserId', userIdFromStore);
            // this.$router.push({ name: "Posts", params: { id: userIdFromStore }});
            router.push({ name: "Posts", params: { id: userIdFromStore }});
        }

        return {
        showUsersButton,
        showTodosButton,
        showPostsButton,
        showAlbumsButton,
        userIdFromStore,
        navigateToTodos,
        navigateToPosts,
        navigateToAlbums,
        url,
        };
    },
    created() {
        this.url = this.$route.name;
    },
    components: {
        UserIcon,
        TodoIcon,
        PostIcon,
        AlbumIcon,
    },
    methods:{
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
        <div @click="navigateToTodos" :style="{ backgroundColor: $route.name === 'Todos' ? 'white' : '#D8D9DD'}"  class=" flex text-18 mb-5 h-10 w-full items-center pl-8">
            <button v-if="$route.meta.showTodosButton" :style="{ backgroundColor: $route.name === 'Todos' ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <TodoIcon/>
                <span class="border-none text-primary">ToDo</span>
            </button>
        </div>
        <div @click="navigateToPosts" :style="{ backgroundColor: $route.name === 'Posts' ? 'white' : '#D8D9DD'}"  class=" flex text-18 mb-5 h-10 w-full items-center pl-8">
            <button v-if="$route.meta.showPostsButton" :style="{ backgroundColor: $route.name === 'Posts' ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <PostIcon/>
                <span class="border-none text-primary">Posts</span>
            </button>
        </div>
        <div @click="navigateToAlbums" :style="{ backgroundColor: url === 'Albums' || url === 'Photos'  ? 'white' : '#D8D9DD'}" class=" flex text-18 h-10 w-full items-center pl-8">
            <button v-if="$route.meta.showAlbumsButton" :style="{ backgroundColor: url === 'Albums' || url === 'Photos'  ? 'white' : '#D8D9DD'}" 
            class="bg-border flex flex-row gap-x-2">
                <AlbumIcon/>
                <span class="border-none text-primary">Albums</span>
            </button>
        </div>
    </div>
    
</template>

<style scoped>

</style>
