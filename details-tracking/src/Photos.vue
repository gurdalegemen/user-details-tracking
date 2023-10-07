<script>
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import SideBar from './components/SideBarComponent.vue'
import AlbumCard from './components/AlbumCardComponent.vue'
import ArrowLeft from './components/icons/Left.vue'
import { useStore } from 'vuex'


export default {
  components: {
    SideBar,
    AlbumCard,
    ArrowLeft,
  },
  methods: {
    navigateToAlbumsPage(){
      this.$router.back();
    },
  },
  setup() {
    const store = useStore();
    const user_ = ref(null);
    const photos_ = [];
    const dataLoaded = ref(true);
    let userIdFromStore = ref(null);
    let albumIdFromStore = ref(null);

    onMounted(() => {
        userIdFromStore = store.getters.getUserId
        albumIdFromStore = store.getters.getAlbumId
      
        if (userIdFromStore) {
            // get user
            axios.get(`https://jsonplaceholder.typicode.com/users/${userIdFromStore}`)
            .then((response) => {
                user_.value = response.data;
            })
            .catch((error) => {
                console.error("Data can not fetch:", error);
            });

            // get albums' photos
            axios.get(`https://jsonplaceholder.typicode.com/albums/${albumIdFromStore}/photos`)
            .then((response) => {
                photos_.value = response.data;
                
                console.log(photos_)
                dataLoaded.value = false;
            })
            .catch((error) => {
                console.error("Data can not fetch:", error);
            });
           
        }
    });

    return {
      user_,
      photos_,
      userIdFromStore,
      dataLoaded,
    };
  },
  
};
</script>

<template>
  <div class="h-screen flex flex-row">
    <div class="w-1/6">
      <div class="bg-border h-full relative">
        <div class="flex flex-row absolute justify-center items-center justify-items-center w-full gap-x-4 p-2 mt-4">
          <div id="user-picture" class="flex justify-start">
            <img
              class="w-16 h-16 rounded-full"
              src="https://randomuser.me/api/portraits/med/men/11.jpg"
              alt=""
            />
          </div>
          <div>
            <div id="user-name" class="font-bold">
              {{ user_?.name }}
            </div>
            <div class="text-sm font-light">
              {{ user_?.email }}
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>

    <div class="w-5/6 border-border border-l-2 px-6">
      <div
        class="flex items-center gap-x-4 text-xl font-semibold text-title py-6"
      >
        <div @click="navigateToAlbumsPage">
          <ArrowLeft/>
        </div>
        Go Albums
      </div>
      <div class="container flex flex-col h-4/5 px-4 overflow-y-auto">
            <div v-if="dataLoaded">
                Loading
            </div>
            <div v-else class="grid w-full grid-cols-10 gap-8">
                <div v-for="photo in photos_.value" :key="photo.id">
                    <img :src="photo.url" :alt="photo.title">
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
