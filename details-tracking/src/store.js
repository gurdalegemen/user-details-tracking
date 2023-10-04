import { createStore } from 'vuex';

const store = createStore({
  state: {
    buttonColor: 'white',
  },
  mutations: {
    setButtonColor(state, color) {
      state.buttonColor = color;
    },
  },
});

export default store;