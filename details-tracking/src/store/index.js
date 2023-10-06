import { createStore } from 'vuex';

const store = createStore({
    state: {
        userId: null,
        post: null
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
    },
    
    actions: {
        setUserId({ commit }, userId) {
            commit('setUserId', userId);
        },
    },
    
    getters: {
        getUserId(state) {
            return state.userId;
        },
    },
});

export default store;