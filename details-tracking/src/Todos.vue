<script>
import SideBar from './components/SideBarComponent.vue';
import ArrowLeft from './components/icons/Left.vue';
import { ref, onMounted} from 'vue';
import axios from 'axios';

export default {
     components: {
      SideBar,
      ArrowLeft,
    },

    setup() {
      const user_ = ref([]);

      onMounted(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
          .then(response => {
            user_.value = response.data;
          })
          .catch(error => {
            console.error('Data can not fetch:', error);
          });
      });

      return {
        user_,
      };
    },
}
</script>



<template>
    <div class="h-screen flex flex-row">
        <div class="w-1/6">
            <div class="bg-border h-full">

            <SideBar/>
            </div>
        </div>
        <div class=" w-5/6 border-border border-l-2 px-6">
            <div class="flex items-center gap-x-4 text-xl font-semibold text-title py-10">
            <ArrowLeft/>
            Go Home
            </div>
            
        </div>
    </div>
</template>



<style scoped> 

</style>