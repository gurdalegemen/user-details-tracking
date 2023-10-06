<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import SideBar from "./components/SideBarComponent.vue";
import ArrowLeft from "./components/icons/Left.vue";
import Post from "./components/PostBar.vue";
import PostModal from './components/modals/PostDetailModal.vue'
import { useStore } from "vuex";


export default {
  components: {
    SideBar,
    Post,
    ArrowLeft,
    PostModal,
  },
  methods: {
    navigateToOtherPage() {
      this.$router.push({ name: "Home" });
    },
  },
  setup() {
    const store = useStore();
    const user_ = ref(null);
    const posts_ = ref(null);
    let userIdFromStore = ref(null);

    onMounted(() => {
      userIdFromStore = store.getters.getUserId
      
      if (userIdFromStore) {
        // get user
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${userIdFromStore}`)
          .then((response) => {
            user_.value = response.data;
          })
          .catch((error) => {
            console.error("Data can not fetch:", error);
          });

        // get user's posts
        axios
          .get(
            `https://jsonplaceholder.typicode.com/users/${userIdFromStore}/posts`
          )
          .then((response) => {
            posts_.value = response.data;
          })
          .catch((error) => {
            console.error("Data can not fetch:", error);
          });
      }
    });

    return {
      user_,
      posts_,
      userIdFromStore,
    };
  },
  
};
</script>

<template>
  <div class="h-screen flex flex-row">
    <div class="w-1/6">
      <div class="bg-border h-full">
        <div class="flex flex-row absolute justify-center items-center justify-items-center">
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
        <Post v-for="post_ in posts_" :key="post_.id" :post="post_" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
