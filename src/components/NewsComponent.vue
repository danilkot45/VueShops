<template>
  <div>
    <h1 class="text-center white--text my-10">Новости</h1>
    <v-card class="mx-auto mb-10" width="50%" color="black" v-for="(i, index) in news" v-bind:key="index">
      <v-card-title class="justify-center white--text">
        {{ i.title }}
      </v-card-title>
      <v-card-subtitle class="white--text">{{ i.desc }}</v-card-subtitle>
      <v-card-text class="white--text"> Автор cтатьи: {{ i.author }}</v-card-text>
    </v-card>
  </div>
</template>
  <script>

export default {
  data() {
    return {
      news: [
        { title: 'Новость 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis eaque repellendus quaerat omnis laboriosam iste commodi, corporis eius repellat iure magnam dolore mollitia non, illo alias quae aperiam assumenda.', author: 'Karl M.' },
        { title: 'Новость 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis eaque repellendus quaerat omnis laboriosam iste commodi, corporis eius repellat iure magnam dolore mollitia non, illo alias quae aperiam assumenda.', author: ' Daniil K.' },
        { title: 'Новость 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis eaque repellendus quaerat omnis laboriosam iste commodi, corporis eius repellat iure magnam dolore mollitia non, illo alias quae aperiam assumenda.', author: ' Ksenia D.' }
      ]
    }
  }
}
</script>
  <style scoped>
  .v-sheet.v-card {
    border-radius: 20px;
  }
  </style>