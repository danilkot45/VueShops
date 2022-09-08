<template>
    <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div style="background:black" class="flex mb-10">
            <h1 class="white--text text-center">✨ Ваша корзина ✨</h1>
            <v-btn style="background:white" text class="mb-2">Перейти к оформлению</v-btn>
        </div>
        <v-row class="flex mx-auto">
            <v-card max-width="400" class="mx-auto card mt-5"
                v-for="(i,index) in  showBasket" :key="i.id">
                <v-img contain :src="i.image" height="300px" class=" mx-auto my-2"></v-img>
                <v-card-title class="justify-center">{{ i.title }}</v-card-title>
                <v-row class="flex mx-auto justify-center">
                    <v-btn @click="minus(i.id, i.count)" class="btn-icon mx-2">
                        <v-icon class="btn-icon" style="background:black" color="white">mdi-minus</v-icon>
                    </v-btn>
                    <input class="text-center" :value="i.count" readonly>
                    <v-btn @click="plus(i.id, i.count)" class="btn-icon mx-2">
                        <v-icon class="btn-icon" style="background:black" color="white">mdi-plus</v-icon>
                    </v-btn>
                </v-row>
                <v-card-actions class="card-actions mt-10">
                    <v-card-title> Цена: {{ (i.count * i.price).toFixed(2) }}$ </v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn class="error" @click="remove(index)">Удалить</v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['showBasket'])
    },
    methods: {
        minus(id, count) {
            if (count > 1) {
                count--
                this.$store.dispatch("addBasketId", [id, -1]);
                this.$store.dispatch("allCount");
            } else {
                count = 1
                this.$store.dispatch("allCount");
            }
        },
        plus(id, count) {
            count++
            this.$store.dispatch("addBasketId", [id, 1]);
            this.$store.dispatch("allCount");
        },
        remove(index){
            this.showBasket.splice(index, 1)
            localStorage.setItem('BasketWithCard',JSON.stringify(this.showBasket));
            this.$store.dispatch("allCount");
        }
    },
    mounted() {
        this.$store.dispatch("allCount");
        this.$store.dispatch("fetchBasket");
    }
}
</script>
<style scoped>
.v-sheet.v-card {
    border: 5px solid purple
}

.theme--light.v-btn.v-btn--has-bg {
    background: black;
    border-radius: none;
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