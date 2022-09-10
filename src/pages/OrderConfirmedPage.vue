<template>
    <div class="order">
        <h3 class="white--text pt-13">Спасибо за заказ!🌸</h3>
        <h1 class="white--text" style="font-size:40px"> Номер вашего заказа №{{Random}}</h1>
        <h2 class="white--text" style="font-size:30px">Вернуться за <router-link to="/" ><b>новыми покупками</b> 🛍</router-link>
        </h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            randomNumber:0
        }
    },
    computed:{
        Random(){
            this.randomNumber = Math.floor(Math.random() * 10000)
            return this.randomNumber
        }
    }
}
</script>
<style>
.order {
    height: 95vh;
   width: 100%;
   background-size: cover;
   background-position: center center;
    background-image: url(../assets/fonOrder.png);
    background-repeat: no-repeat;
    text-align: center;
}
</style>