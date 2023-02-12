<template lang="pug">
div
    header-bar
    categories
    h1 day la home
</template>

<script>
import HeaderBar from "@/components/HeaderBar/index.vue";
import Categories from "@/components/Categories/index.vue";
const Home = {
    components: {
        HeaderBar,
        Categories
    }
}
export default Home
</script>

<style>

</style>