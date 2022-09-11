import Vue from "vue";
import Vuex from "vuex";
import products from "./productsModule"
import card from './cardModule'
import server from './serverModule'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products,
        card,
        server
    },
  });