<template>
    <v-app-bar class="background" height="100px">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <router-link :to="'/'"><img src="../assets/home-page.svg" alt=""></router-link>
        <router-link :to="i.path" style="text-decoration: none;" v-for="(i, index) in nav" :key="index">
            <div class="ml-3 black--text">{{ i.name }}</div>
        </router-link>
        <v-spacer></v-spacer>
        <v-img max-height="60" contain src="../assets/logo.svg" alt=""></v-img>
        <v-spacer></v-spacer>
        <img src="../assets/phone.png" alt="">
        <a style="text-decoration:none" href="tel:+79648525736" class="mr-10 ml-3 black--text">8 (964) 852-57-36</a>
        <router-link :to="'/card'">
            <v-btn>
                <v-img src="../assets/basket.svg" alt=""></v-img>
                <div class="counter">{{count}}</div>
            </v-btn>
        </router-link>
    </v-app-bar>
</template>
  
  <script>
import { mapState } from 'vuex';

export default {
    name: "HeaderComponent",
    data() {
        return {
            nav: [
                { path: "/category", name: "Category" },
                { path: "/news", name: "News" },
                { path: "/about", name: "About us" },
            ],
        };
    },
    computed:{
        ...mapState({ count: state => state.card.count })
    }
}
</script>
  <style scoped>
  .theme--light.v-btn.v-btn--has-bg {
      background-color: transparent;
  }
  
  .counter {
      font-weight: bold;
      width: 22px;
      height: 16px;
      background-color: white;
      text-decoration: none;
      border-radius: 15px;
      position: absolute;
      top: -1px;
      left: 25px;
  }
  </style>