<script setup>
  import Card from './components/UserCardComponent.vue';
  import SideBar from './components/SideBarComponent.vue';
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
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
        </div>
      </div>
  </div>
    
  </main>
</template>

<style scoped>

</style>
