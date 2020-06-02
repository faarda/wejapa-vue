import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueFeather from 'vue-feather';
import VueToast from 'vue-toast-notification';
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueFeather);

Vue.use(VueToast);

import Japa from './Japa';

Vue.prototype.$japa = new Japa();

import API from './store/API';

Vue.prototype.$api = API;

// Register global app components
const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  let loggedIn = localStorage.getItem('japa_token') !== null;
  let user = JSON.parse(localStorage.getItem('japa_user')) ?? null;

  loggedIn = loggedIn && user !== null;

  if (to.meta.requiresGuest && loggedIn) {
    next({
      name: 'jobs'
    });
  } else if (to.meta.requiresAuth && !loggedIn) {
    store.commit('DESTROY_USER');

    next({
      name: "login"
    });
  } else {
    next();
  }
});


Vue.mixin({
  methods: {
    showMessage: (
      type,
      message
    ) => {
      Vue.$toast.open({
        message: message,
        type: type,
        position: 'bottom'
      });
    },
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')