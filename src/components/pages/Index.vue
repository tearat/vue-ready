<template>
    <div class="page">
        <h2 class="page__subheader center">Index page content</h2>
        <div class="center">
            <img :src="metal" alt="" class="page__image">
        </div>
    </div>
</template>


<script>

import metal from '~/public/img/pic.jpg'

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
