import Vue from "vue";
import Vuex from "vuex";
import products from "./productsModule"
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products
    },
  });