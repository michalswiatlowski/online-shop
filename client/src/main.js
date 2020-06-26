import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './router/routes.js';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

require('./assets/css/global.css');

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
