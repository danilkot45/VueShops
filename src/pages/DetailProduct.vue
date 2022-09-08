<template>
    <v-container fluid class="fonDetailPage">
        <h1 class="white--text text-center my-10">{{ productItem.title }} </h1>
        <v-card class="mx-auto card mt-5" max-width="800px">
            <div class="detailPage--responsive">
                <SliderComponent :items="[productItem.image]"></SliderComponent>
            </div>
            <v-row class="flex mx-auto justify-center my-5">
                <v-btn class="btn-icon mx-2" @click="count > 1 ? count-- : 1">
                    <v-icon class="btn-icon" style="background:black" color="white">mdi-minus</v-icon>
                </v-btn>
                <input class="text-center" :value="count" readonly>
                <v-btn class="btn-icon mx-2" @click="count++">
                    <v-icon class="btn-icon" style="background:black" color="white">mdi-plus</v-icon>
                </v-btn>
            </v-row>
            <ProductTabsComponent :desc="productItem.description"></ProductTabsComponent>
            <v-card-actions class="card-actions">
                <v-spacer></v-spacer>
                <v-card-title> Цена: {{ productItem.price }}$ </v-card-title>

                <v-spacer></v-spacer>

                <v-btn @click="countBuy()" color="black lighten-2" class="white--text">Купить</v-btn>
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
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            id: this.$route.params.id,
            productItem: [],
            count: 1
        }
    },
    computed: {
        ...mapGetters(['allProducts'])
    },
    components: {
        SliderComponent,
        TopProduct,
        ProductTabsComponent
    },
    methods: {
        countBuy() {
            this.$store.dispatch("addBasketId", [this.productItem.id, this.count, this.productItem.title, this.productItem.price, this.productItem.image]);
            this.$store.dispatch("allCount");
            this.count = 1
        }
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
        this.productItem = this.allProducts.filter((a) => a.id == this.id)[0]
        this.$store.dispatch("allCount");
    },
    watch: {
        $route(toRoute) {
            this.productItem = this.allProducts
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

input {
    border: 2px solid purple;
    border-radius: 20px;
    font-weight: bold;
}

.v-icon {
    border-radius: 20px;
    border: 2px solid purple
}

.v-btn.btn-icon {
    border-radius: 20px;
    border: 2px solid purple
}
</style>