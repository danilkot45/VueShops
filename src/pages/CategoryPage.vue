<template>
    <div class="category background">
        <v-container fluid>
            <v-row>
                <v-col class="d-flex mt-5 ml-2" cols="12" sm="6">
                    <b><v-select :items="categories" @change="page=1"  v-model="category" label="Select a category"></v-select></b>
                </v-col>
            </v-row>
            <ProductList :products="productItems"></ProductList>
            <v-row class="flex justify-center my-5">
                <v-pagination  v-model="page" :length="sizePages" circle></v-pagination>
            </v-row>
            <TopProduct></TopProduct>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductList from '../components/ProductListComponent.vue'
import TopProduct from '../components/TopProductsComponent'

export default {
    data() {
        return {
            categories: ['All'],
            category: 'All',
            page:1
        }
    },
    computed: {
        ...mapState({ allProducts: (state) => state.products.products }),
        productItems() {
            let arr = this.allProducts;
            if(this.categories.length <= 1){
            for (let i = 0; i < arr.length; i++) {
                this.categories.push(arr[i].category)
            }
        }
            return this.allProducts.filter((item) => item.category == this.category || this.category == "All").splice(this.page*4-4, 4)
        },
        sizePages() {
            let arr = this.allProducts.filter((item) => item.category == this.category || this.category == "All").length
           return  Math.ceil(arr / 4)
    },
    },
    methods: {
    },
    components: {
        ProductList,
        TopProduct
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
        this.$store.dispatch("allCount");
    },
}
</script>
<style>
.category {
    min-height: 525px;
    text-align: center;
}
</style>