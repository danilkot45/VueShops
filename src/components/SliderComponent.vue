<template>
  <v-carousel>
    <v-carousel-item contain v-for="(item, index) in items" :key="index" :src="item"></v-carousel-item>
  </v-carousel>
</template>
  <script>
export default {
  props: ['items', 'mt']
}
</script>
  <style>
  .detailPage--responsive .v-responsive {
    max-width: 40%;
    margin: 0 auto;
  }
  </style>