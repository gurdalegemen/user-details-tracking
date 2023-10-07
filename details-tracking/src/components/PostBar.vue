<script>
import RightArrow from './icons/Right.vue'
import CloseButton from './icons/Close.vue'
import PostModal from './modals/PostDetailModal.vue'
import CommentCard from './modals/CommentCardModal.vue'
import { ref, onMounted } from "vue"
import axios from 'axios';

   export default {
    props: {
        post: Object,
    },
    setup(){

        const comments_= ref(null);

        const popupTriggers = ref({
            buttonTrigger: false,
        })

        const TogglePopup = (trigger, id) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
            if(id !== undefined){
                axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => {
                comments_.value = response.data;
                })
                .catch(error => {
                console.error('Data can not fetch:', error);
                });
            }    
        }

        return {
            popupTriggers,
            TogglePopup,
            comments_,
        }
    },
    components: {
        RightArrow,
        PostModal,
        CloseButton,
        CommentCard,
    },
    methods:{

    },
   
   }

</script>

<template>
    <div v-if="popupTriggers.buttonTrigger">
            <PostModal :post="post"/>
    </div>

    <div class="h-44 flex flex-col p-5">
        <div class="pb-5">
            <p class="font-medium capitalize pb-2">{{post?.title}}</p>
            <div class="pb-5">
                <p class="font-light text-left">{{post?.body}}</p>
            </div>
            <div class="flex justify-between items-center justify-items-end">
                <div>
                
                </div>
                <div
                    @click="() => TogglePopup('buttonTrigger', post.id)"
                    class="flex flex-row text-light font-semibold text-title gap-x-5">
                    See More
                    <RightArrow/>
                </div>
            </div>
        </div>
        <div>
            <hr class="border-border">
        </div>
    </div>

    <PostModal v-if="popupTriggers.buttonTrigger">
        <div class="box-border border-2 border-border rounded-2xl pb-5 bg-white flex flex-col">
            <div class="flex h-24 items-center justify-between p-10">
                <p class="font-medium text-lg">{{post.title}}</p>
                <div @click="() => TogglePopup('buttonTrigger')">
                    <CloseButton/>
                </div>
            </div>
            <div class="flex flex-row flex-1"> 
                <div class="w-3/5 border-r border-border bg-white overflow-auto"> 
                    <div class="p-10 text-left">
                        {{post.body}}
                    </div>
                </div>
                <div class="w-2/5 bg-white"> 
                    <p class="font-semibold text-xl pl-5 pb-2">Comments</p>
                    <CommentCard v-for="comment_ in comments_" :key="comment_.id" :comment="comment_"/>
                </div>
            </div>
        </div>
    </PostModal>
</template>

<style scoped>
    
</style>
