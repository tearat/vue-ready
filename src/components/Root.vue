<template>
    <div class="container">
        <h1 class="container__header">Simple Vue app</h1>

        <hr class="container__hr">

        <p>Router links:</p>
        <ul class="container__links">
            <router-link to="/" class="container__links__link">Index</router-link>
            <router-link to="/test" class="container__links__link">Test</router-link>
        </ul>

        <hr class="container__hr">

        <p>Router view:</p>
        <router-view class="container__router-view"></router-view>
    </div>
</template>


<script>

export default {
    data () {
        return {
        }
    }
}

</script>


<style scoped>

.container{

}

</style>
