<template>
    <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div style="margin-top:-63px">
            <SliderSale :items="Sale"></SliderSale>
        </div>
        <ProductList :products="allProducts"></ProductList>
        <TopProduct></TopProduct>
        <News></News>
    </div>
</template>
<script>
import SliderSale from '../components/SliderComponent'
import ProductList from '../components/ProductListComponent'
import TopProduct from '../components/TopProductsComponent'
import News from '../components/NewsComponent.vue'
import { mapState } from 'vuex'
export default {
    name: 'HomePage',
    computed: {
        ...mapState({ Sale: state => state.products.photoSale }),
        ...mapState({allProducts: state => state.products.products})
    },
    components: {
        SliderSale,
        ProductList,
        TopProduct,
        News
    },
    mounted(){
        this.$store.dispatch("fetchProducts");
    }
}
</script>
<style scoped>
.fonimg .v-responsive {
    max-width: 50%;
    margin: 0 auto;
}
</style>