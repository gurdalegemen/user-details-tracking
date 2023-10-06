<script>
//     import CloseButton from '../icons/Close.vue'
    // import CommentCard from './CommentCardModal.vue'
    // import { ref, onMounted } from "vue";
    // import axios from 'axios';
    
//     export default {
//         props: {
//             post: Object,
//         },
//         setup() {
//             const comments_= ref(null);

//             onMounted(() => {
//                 axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post.value.id}/comments`)
//                 .then(response => {
//                     comments_.value = response.data;
//                     console.log(comments_);
//                 })
//                 .catch(error => {
//                     console.error('Data can not fetch:', error);
//                 });
//             });

//             return {
//                 comments_,
//             };
//         },
//         components: {
//             CommentCard,
//         },
//    }

</script>

<template>
    <div class="popup">
        <slot/>
    </div>
</template>

<style scoped>
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>