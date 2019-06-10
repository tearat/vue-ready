<template>
    <div class="container">
        <h1>Root</h1>
        <hr>
        Router links:
        <router-link to="/">Index</router-link>
        <router-link to="/test">Test</router-link>
        <hr>
        Router view: <router-view></router-view>
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