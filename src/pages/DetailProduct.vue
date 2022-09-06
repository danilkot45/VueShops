<template>
    <v-container fluid class="fonDetailPage">
        <h1 class="white--text text-center my-10">{{ productItem.title }} </h1>
        <v-card width="50%" class="mx-auto">
            <div class="detailPage--responsive">
                <SliderComponent :height="'auto'" :items="[productItem.image]"></SliderComponent>
            </div>
            <ProductTabsComponent :desc="productItem.description"></ProductTabsComponent>
            <v-card-actions class="card-actions">
                <v-spacer></v-spacer>
                <v-card-title> Цена: {{ productItem.price }}$ </v-card-title>

                <v-spacer></v-spacer>

                <v-btn color="black lighten-2" class="white--text">Купить</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
        <TopProduct></TopProduct>
    </v-container>

</template>

<script>
import SliderComponent from "../components/SliderComponent.vue";
import TopProduct from '../components/TopProductsComponent.vue'
import ProductTabsComponent from '../components/ProductTabsComponent.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            productItem: []
        }
    },
    components: {
        SliderComponent,
        TopProduct,
        ProductTabsComponent
    },
    mounted() {
        this.productItem = this.$store.getters.allProducts
            .filter((a) => a.id == this.id)[0]
    },
    watch: {
        $route(toRoute) {
            this.productItem = this.$store.getters.allProducts
                .filter((a) => a.id == toRoute.params.id)[0]
        }
    }
}
</script>
<style scoped>
.row {
    margin: 0
}

.card-actions {
    margin-top: 100px;
}

.fonDetailPage {
    background-image: url(../assets/fonDetailPage2.png);
    background-repeat: repeat;
    background-position: center center;
}

.container {
    padding-top: 1px;
}
</style>