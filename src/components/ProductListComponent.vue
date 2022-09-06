<template>
  <div>
    <h1 class="text-center my-10 white--text">Наши товары</h1>
    <v-row class="flex mx-auto">
      <v-card class="mx-auto card mt-5" max-width="344" v-for="(i, index) in this.$store.getters.allProducts"
        :key="index">
        <router-link :to="'/product/' + i.id + '/description'">
          <v-img contain class="img" :src="i.image" height="300px"></v-img>
          <v-card-title>
            {{ i.title }}
          </v-card-title>
        </router-link>

        <v-card-actions class="card__price">
          <v-card-title> {{ i.price }}$ </v-card-title>

          <v-spacer></v-spacer>

          <v-btn color="black lighten-2 white--text">
            Купить
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }

}
</script>
<style scoped>
.v-application a {
  color: black;
  text-decoration: none;
}
</style>