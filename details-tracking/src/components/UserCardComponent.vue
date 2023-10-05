<script>
  import Pin from './icons/Pin.vue'
  import Company from './icons/Company.vue'
  import Website from './icons/Website.vue'
  import { ref, onMounted} from 'vue'

  export default {
    props: {
      user: Object,
    },
    components:{
      Pin,
      Company,
      Website,
    },
    methods: {
      navigateToOtherPage() {
        this.$router.push({ name: 'Todos', params: { id: this.user.id }});
      }
    },
  };

</script>

<template>
  <div @click="navigateToOtherPage" id="user-card" class="box-border h-80 w-full border-2 rounded-md border-border bg-white flex flex-col py-4 hover:shadow-xl">
    
    <div id="user" class="w-full flex h-2/5 items-center">

      <div id="user-picture" class="w-2/5 flex justify-center">
        <img class="w-30 h-30 rounded-full" src="https://randomuser.me/api/portraits/med/men/11.jpg" alt="">
      </div>

      <div id="user-details" class="w-3/5">

        <div id="user-name" class="font-bold">
          {{user.name}}
        </div>

        <div id="user-email" class="text-sm font-light">
          {{user.email}}
        </div>

        <div id="user-phone" class="text-sm font-light">
          {{user.phone}}
        </div>

      </div>

    </div>

    <div id="user-info" class="w-full h-3/5 px-10 mb-2 flex flex-col gap-y-2">

      <div id="user-location">
        <div class="font-bold flex flex-row gap-x-2">
          <Pin/>
          Location
        </div>
        <div class="font-light text-sm ">
          {{user.address.city}}, {{user.address.street}}, {{user.address.suite}},{{user.address.zipcode}}
        </div>
      </div>

      <div id="user-company">
        <div class="font-bold flex flex-row gap-x-2">
          <Company/>
          Company
        </div>
        <div class="font-light text-sm">
          {{user.company.name}}
        </div>
      </div>

      <div id="user-website">
        <div class="font-bold flex flex-row gap-x-2">
          <Website/>
          Website
        </div>
        <div class="font-light text-sm">
          {{user.website}}
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>
