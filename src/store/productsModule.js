import axios from "axios";

export default {
    actions: {
        async fetchProducts(ctx) {
            const res = await axios.get("https://fakestoreapi.com/products")
            ctx.commit("addProducts", res.data);
        },
      },
      mutations: {
        addProducts(state, add) {
          state.products = add;
        },
      },
    state: {
      products: []
    },
    getters: {
      allProducts(state) {
        return state.products;
      },
      topProducts(state) {
        return state.products.filter((top) => top.rating.rate > 4.6)
      }
    }
  };
  