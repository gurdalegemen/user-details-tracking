import { createStore } from 'vuex';

const store = createStore({
    state: {
        userId: null,
        albumId: null,
        post: null
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setAlbumId(state, albumId) {
            state.albumId = albumId;
        },
        
    },
    
    actions: {
        setUserId({ commit }, userId) {
            commit('setUserId', userId);
        },
        setAlbumId({ commit }, albumId) {
            commit('setAlbumId', albumId);
        },
    },
    
    getters: {
        getUserId(state) {
            return state.userId;
        },
        getAlbumId(state) {
            return state.albumId;
        },
    },
});

export default store;