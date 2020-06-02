import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import actions from './actions';

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('japa_user')) || null,
    token: localStorage.getItem('japa_token')
  },
  mutations: {
    SET_USER: (state, data) => {
      console.log(data);
      localStorage.setItem('japa_token', data.token);
      state.token = data.token;
      state.user = data.developer;
      localStorage.setItem('japa_user', JSON.stringify(data.developer));
    },
    DESTROY_USER: (state) => {
      localStorage.removeItem('japa_token');
      localStorage.removeItem('japa_user');
    }
  },
  actions,
  getters: {
    isLoggedIn() {
      return localStorage.getItem('japa_token') !== null;
    },
    user(state){
      return state.user; 
    }
  }
})
