<template>
    <div class="container">
        <h1 class="container__header">Simple Vue app</h1>

        <hr class="container__hr">

        <p>Router links:</p>
        <ul class="container__links">
            <router-link to="/" class="container__links__link">Index</router-link>
            <router-link to="/test" class="container__links__link">Test</router-link>
            <router-link to="/vuetify" class="container__links__link">Vuetify</router-link>
        </ul>

        <hr class="container__hr">

        <p>Router view:</p>
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
