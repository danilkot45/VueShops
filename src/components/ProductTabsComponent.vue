<template>
    <v-card color="purple" class="my-1">
        <v-tabs background-color="transparent" color="black">
            <router-link :to="'description'">
                <v-tab>Описание</v-tab>
            </router-link>

            <router-link :to="'characteristic'">
                <v-tab>Характеристики</v-tab>
            </router-link>

            <router-link :to="'reviews'">
                <v-tab>Отзывы </v-tab>
            </router-link>
        </v-tabs>

        <v-tabs-items>
            <v-card>
                <v-card-text>
                    <router-view :desc="desc"></router-view>
                </v-card-text>
            </v-card>
        </v-tabs-items>
    </v-card>
</template>
  <script>
export default {
    props: ['desc']
}
</script>
  <style scoped>
.v-application a {
    color: black;
    text-decoration: none;
  }
  </style>