<template>
    <div class="order">
        <h3 class="white--text pt-13">Thanks for your order!🌸</h3>
        <h1 class="white--text" style="font-size:40px"> Your order №{{ Random }}</h1>
        <h2 class="white--text" style="font-size:30px">Come back for <router-link to="/"><b>new purchases</b>
            </router-link> 🛍
        </h2>
    </div>
</template>

<script>
export default {
    computed: {
        Random() {
            return Math.floor(Math.random() * 10000)
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