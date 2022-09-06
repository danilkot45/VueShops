<template>
  <v-app>

    <v-container fluid>
      <HeaderComponent></HeaderComponent>
      <v-main>
        <router-view></router-view>
      </v-main>
      <FooterComponent></FooterComponent>
    </v-container>

  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>
<style>
.container {
  padding: 0;
}

@import '../public/css/style.css';
</style>
  