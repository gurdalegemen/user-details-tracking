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
    navigateToOtherPage() {
      this.$router.push({ name: "Home" });
    },
  },
  setup() {
    const store = useStore();
    const user_ = ref(null);
    const albums_ = [];
    const dataLoaded = ref(true);
    const album_photos = reactive([]);
    let userIdFromStore = ref(null);

    onMounted(() => {
        userIdFromStore = store.getters.getUserId
      
        if (userIdFromStore) {
            // get user
            axios.get(`https://jsonplaceholder.typicode.com/users/${userIdFromStore}`)
            .then((response) => {
                user_.value = response.data;
            })
            .catch((error) => {
                console.error("Data can not fetch:", error);
            });

            // get user's albums
            axios.get(`https://jsonplaceholder.typicode.com/users/${userIdFromStore}/albums`)
            .then((response) => {
                albums_.value = response.data;
                if(albums_)
                {
                  for (const album of albums_.value) {
                    axios.get(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_start=0&_limit=4`)
                    .then((response =>{ 
                        album_photos.push({id:album.id, title:album.title, photos:response.data});
                    }))
                    .catch((error) => {
                        console.error("Data can not fetch:", error);
                    })  
                  }
                }
                
                dataLoaded.value = false;
            })
            .catch((error) => {
                console.error("Data can not fetch:", error);
            });
           
        }
    });

    return {
      user_,
      albums_,
      album_photos,
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
        <div @click="navigateToOtherPage">
          <ArrowLeft/>
        </div>
        Go Home
      </div>
      <div class="container flex flex-col h-4/5 px-4 overflow-y-auto">
          <div v-if="dataLoaded">
            Loading..
          </div>
          <div v-else class="grid w-full grid-cols-3 gap-8">
            <AlbumCard v-for="album in album_photos" :key="album.id" :album="album"/>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
