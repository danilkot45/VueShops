<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mb-2" v-for="i in getReviews" :key="i.id">
          <v-card-title v-model="title"> {{ i.name }}</v-card-title>
          <v-card-subtitle v-model="reviews">{{ i.reviews }}</v-card-subtitle>
          <v-card-text>{{ i.date }}</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <form>
          <v-text-field v-model="title" :counter="15" label="Your name" required></v-text-field>
          <v-text-field v-model="reviews" label="Your feedback" required></v-text-field>

          <v-btn class="secondary" @click="SendReviews()">Post a review </v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>
<script>


export default {
  props: ['idProduct'],
  data() {
    return {
      title: '',
      reviews: '',
    }
  },
  computed: {
    getReviews() {
      return this.$store.getters.getReviews.filter((item) => item.idProduct == this.idProduct)
    }
  },
  mounted() {
    this.$store.dispatch("loadReviews")
  },
  methods: {
    SendReviews() {
      this.$store.dispatch("fetchReviews", [this.idProduct, this.title, this.reviews]);
      this.title = ''
      this.reviews = ''
    }
  },
}
</script>