import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import MyPlugin from './plugins/plugin'
import router from "./router/routes";
import store from "./store";

Vue.use(VueRouter)
Vue.use(MyPlugin)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
