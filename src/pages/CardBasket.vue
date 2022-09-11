<template>
    <div class="background" style="min-height: 525px">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div style="background:black" class="flex mb-10">
            <h1 class="white--text text-center">✨ Ваша корзина ✨</h1>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn style="background:white" class="mb-2" v-bind="attrs"
                        v-on="on">Перейти к оформлению
                    </v-btn>
                </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Заполните ваши данные</span>
                        </v-card-title>
                        <form @submit.prevent="sendDataToServer()">
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-text-field type="text" label="Ваше имя" :rules="[v => /^[a-z а-я ,.'-]+$/i.test(v) || 'Введите имя']"  v-model="firstname" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field type="text" label="Ваша фамилия" :rules="[v => /^[a-z а-я ,.'-]+$/i.test(v) || 'Введите фамилию']" v-model="lastname" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field type="tel" label="Телефон*" :rules="[v =>/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(v) || 'Пример: 89123456789' ]" v-model="tel" required ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field  type="text" label="Адрес*" :rules="[v => !!v || 'Введите адрес места проживания']" v-model="adress" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field  type="text" label="Город*" :rules="[v => !!v || 'Введите город']" v-model="city" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-select :items="['Наличными', 'Сертификат', 'Перевод по карте']" v-model="payment"
                                            label="Cпособ оплаты" ></v-select>
                                        <v-col cols="12">
                                            Итого: <b>{{ SumPrice.toFixed(2) }}</b>
                                        </v-col>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*Подтверждая заказ, вы соглашаетесь со всеми условиями магазина</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Выйти
                            </v-btn>
                                <v-btn color="blue darken-1" text type="submit">
                                    Подтвердить заказ
                                </v-btn>
                        </v-card-actions>
                    </form>
                    </v-card>
            </v-dialog>
        </div>
        <v-row class="flex mx-auto">
            <v-card max-width="400" class="mx-auto card my-5" v-for="(i, index) in  showBasket" :key="i.id">
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
                    <v-card-title> Цена: {{ MultiplicationPriceAndCount(i.count, i.price).toFixed(2) }}$ </v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn class="error" @click="removeBasketItem(index)">Удалить</v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
        <TopProduct></TopProduct>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TopProduct from '../components/TopProductsComponent.vue'
export default {
    data() {
        return {
            dialog: false,
            firstname:"",
            lastname:"",
            tel:"",
            adress:"",
            city:"",
            payment:""
        }
    },
    computed: {
        ...mapGetters(['showBasket']),
        SumPrice() {
            let sum = 0
            for (let i in this.showBasket) {
                sum += this.MultiplicationPriceAndCount(this.showBasket[i].count, this.showBasket[i].price)
            }
            return sum
        }
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
        removeBasketItem(index) {
            this.showBasket.splice(index, 1)
            localStorage.setItem('BasketWithCard', JSON.stringify(this.showBasket));
            this.$store.dispatch("allCount");
        },
        MultiplicationPriceAndCount(count, price) {
            let multipl = count * price
            return multipl
        },
        sendDataToServer() {
            this.dialog = false
            this.$store.dispatch("fetchForm",[this.firstname,this.lastname,this.tel,this.adress,this.city,this.payment,this.SumPrice]);
            localStorage.removeItem('BasketWithCard')
            // this.$store.dispatch("fetchBasket");
            this.$store.dispatch("allCount");
            this.$router.push({ path: "/orderconfirmed" });
        }
    },
    components: {
        TopProduct
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