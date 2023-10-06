<script>

export default {
  props: {
    comment: Object,
  },
  setup() {},
  components: {},
};
</script>

<template>
  <div class="p-5 flex flex-row gap-x-1">
    <div class="w-1/6 flex justify-center">
      <img
        class="h-12 w-12 rounded-full"
        src="https://randomuser.me/api/portraits/med/men/11.jpg"
        alt=""
      />
    </div>
    <div class="flex flex-col w-5/6">
      <div class="font-semibold text-sm pb-2">
        {{comment.name}}
      </div>
      <p class="font-light text-left text-xs line-clamp-2">
        {{comment.body}}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
