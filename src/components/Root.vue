<template>
    <div class="container">
        <h1 class="container__header">Simple Vue app</h1>

        <hr class="container__hr">

        <!-- <p>Router links:</p> -->
        <ul class="container__links">
            <router-link :to="{ name: 'index' }" class="container__links__link">Index</router-link>
            <router-link :to="{ name: 'books' }" class="container__links__link">Books</router-link>
        </ul>

        <hr class="container__hr">

        <!-- <p>Router view:</p> -->
        <router-view v-on:hello="hello"></router-view>
    </div>
</template>


<script>

export default {
    data () {
        return {
        }
    },
    methods: {
        hello() {
            alert("Hello vue!")
        }
    },
}

</script>


<style scoped>

.container{

}

</style>
