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
      products: [],
      photoSale:[
        {
            src: 'https://www.imperiasumok.ru/upload/medialibrary/23b/23b54814f7df3f40ea8e27c2c3546444.jpg'
          },
          {
            src: 'https://www.imperiasumok.ru/upload/medialibrary/fba/fbabe1dcb5c5da239bb145bebe54f2a8.jpg'
          },
          {
            src: 'https://www.imperiasumok.ru/upload/medialibrary/cce/cce36bb2aba26251a8d7ba3648627f48.jpg'
          }
      ]
    },
    getters: {
      allProducts(state) {
        return state.products;
      },
      topProducts(state) {
        return state.products.filter((top) => top.rating.rate > 4.6)
      },
      photoSaleSlider(state){
          return state.photoSale
      }
    }
  };
  