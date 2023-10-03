<script setup>
  import Pin from './icons/Pin.vue'
  import Company from './icons/Company.vue'
  import Website from './icons/Website.vue'

</script>

<template>
  <div id="user-card" class="box-border h-80 w-80 border-2 rounded-md border-border bg-white flex flex-col pb-10 hover:shadow-xl">
    
    <div id="user" class="w-full flex h-2/5 items-center">

      <div id="user-picture" class="w-2/5 flex justify-center">
        <img class="w-30 h-30 rounded-full" src="https://randomuser.me/api/portraits/med/women/91.jpg" alt="">
      </div>

      <div id="user-details" class="w-3/5">

        <div id="user-name" class="font-bold">
          Jane Doe
        </div>

        <div id="user-email" class="text-sm font-light">
          jane@lorem.com
        </div>

        <div id="user-phone" class="text-sm font-light">
          +90 000 000 00 00
        </div>

      </div>

    </div>

    <div id="user-info" class="w-full h-3/5 pl-10 pr-20 flex flex-col gap-y-2">

      <div id="user-location">
        <div class="font-bold flex flex-row gap-x-2">
          <Pin/>
          Location
        </div>
        <div class="font-light text-sm ">
          Timko Sokak no:2 Yeni Mahalle / Ankara
        </div>
      </div>

      <div id="user-company">
        <div class="font-bold flex flex-row gap-x-2">
          <Company/>
          Company
        </div>
        <div class="font-light text-sm">
          Timko Sokak no:2 Yeni Mahalle / Ankara
        </div>
      </div>

      <div id="user-website">
        <div class="font-bold flex flex-row gap-x-2">
          <Website/>
          Website
        </div>
        <div class="font-light text-sm">
          jane.doe.com
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>
