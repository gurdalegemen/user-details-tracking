<script>
  import Card from './components/UserCardComponent.vue';
  import SideBar from './components/SideBarComponent.vue';
  import { ref, onMounted} from 'vue';
  import axios from 'axios';

  export default {
    components: {
      Card,
      SideBar,
    },

    setup() {
      const users_ = ref([]);
      const user_ = ref([]);

      onMounted(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            users_.value = response.data;
          })
          .catch(error => {
            console.error('Data can not fetch:', error);
          });
      });

      return {
        users_,
        user_,
      };
    },
  };
</script>

<template>
  <main>
    <div class="h-screen flex flex-row">
        <div class="w-1/6">
            <div class="bg-border h-full">
            <SideBar/>
            </div>
        </div>
        <div class="w-5/6 border-border border-l-2 px-6">
            <p class="text-xl font-semibold text-title py-10">All Users</p>
            <div class="container flex flex-col h-4/5 px-4 overflow-y-auto">
              <div class="grid w-full justify-items-center grid-cols-3 gap-8">
                  <Card v-for="user_ in users_" :key="user_.id" :user="user_" :id="user_.id"/>
              </div>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>

</style>
