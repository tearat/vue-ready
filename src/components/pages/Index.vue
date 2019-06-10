<template>
    <div class="container">
        <h1>Index page</h1>
        <img :src="metal" alt="">
    </div>
</template>


<script>

import metal from '../../public/img/pic.jpg'
    
export default {
    data () {
        return {
            metal: metal
        }
    }
}

</script>


<style scoped>

.container{
    
}

</style>