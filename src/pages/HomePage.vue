<template>
    <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <SliderSale :height="'500px'" :items="this.$store.getters.photoSaleSlider"></SliderSale>
        <ProductList></ProductList>
        <TopProduct></TopProduct>
        <News></News>
    </div>
</template>
<script>
import SliderSale from '../components/SliderComponent'
import ProductList from '../components/ProductListComponent'
import TopProduct from '../components/TopProductsComponent'
import News from '../components/NewsComponent.vue'
export default {
    name: 'HomePage',
    components: {
        SliderSale,
        ProductList,
        TopProduct,
        News
    }
}
</script>
<style scoped>
.fonimg .v-responsive {
    max-width: 50%;
    margin: 0 auto;
}
</style>