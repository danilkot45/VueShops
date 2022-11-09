<template>
  <div>
    <h1 class="text-center my-10 white--text">Our products</h1>
    <v-row class="flex mx-auto">
      <v-card class="mx-auto card mt-5" max-width="344" v-for="(i, index) in products" :key="i.id">
        <router-link :to="'/product/' + i.id + '/description'">
          <v-img contain class="img" :src="i.image" height="300px"></v-img>
          <v-card-title>
            {{ i.title }}
          </v-card-title>
        </router-link>

        <v-card-actions class="card__price">
          <v-card-title> {{ i.price }}$ </v-card-title>

          <v-spacer></v-spacer>

          <v-btn @click="countBuy(i)" color="black lighten-2 white--text">
            Buy
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-row>
  </div>
</template>

<script>


export default {
  props:['products'],
  name: 'ProductList',
  data() {
    return {
      count: 1,
      basketId: []
    }
  },
  methods: {
    countBuy({id, title,price, image}) {
      this.$store.dispatch("addBasketId", [id, this.count, title,price,image]);
      this.$store.dispatch("allCount");
    }

  },
  mounted() {
    this.$store.dispatch("allCount");
  }

}
</script>
<style scoped>
.v-application a {
  color: black;
  text-decoration: none;
}
</style>