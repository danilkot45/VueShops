<template>
    <div class="fonNews">
        <NewsComponent></NewsComponent>
    </div>
</template>

<script>
import NewsComponent from '../components/NewsComponent.vue';
export default {
    components: { NewsComponent }
}
</script>
<style>
.fonNews {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../assets/newsletter.jpg);
    margin-top: -40px;
}
</style>