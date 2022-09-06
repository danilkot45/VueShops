<template>
    <v-footer class="mt-20" style="padding:0">
        <v-card width="100%" class="black lighten-1 white--text text-center">
            <v-card-text>
                <v-btn v-for="(icon, index) in icons" :key="index" class="mx-3" color="white">
                    <a :href="icon.href">
                        <v-img max-width="30" :src="icon.path"></v-img>
                    </a>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Разработал Красавцев Даниил
            </v-card-text>
            <v-card-text class="white--text pt-0">
                Адрес: г. Саранск, ул. Советская 77А
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                &copy;2022 — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>
import insta from '@/assets/icons/logo-insta.gif'
import vk from '@/assets/icons/logo-vk.gif'
import twitter from '@/assets/icons/logo-twitter.gif'
import gmail from '@/assets/icons/logo-gmail.gif'
export default {
    data() {
        return {
            icons: [
                { href: 'https://www.instagram.com', path: insta },
                { href: 'https://vk.com', path: vk },
                { href: 'https://twitter.com', path: twitter },
                { href: 'https://www.google.com/intl/ru/gmail/about/', path: gmail }
            ]
        }
    }
}
</script>
  <style scoped>
  .v-btn:before {
      background-color: white;
  }
  
  .v-sheet.v-card {
      border-radius: 0px
  }
  </style>