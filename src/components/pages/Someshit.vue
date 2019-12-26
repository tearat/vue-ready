<template lang="pug">
    div.pug
        h2 Langs demonstration
        p HTML compiled by Pug
        p JS compiled by Coffeescript
        p CSS compiled by SCSS
        hr
        p mergedText: {{ mergedText }}
</template>

<script lang="coffee">
    export default
        data: ->
            return
                lorem: "lorem",
                ipsum: "ipsum"
        computed:
            mergedText: ->
                return this.lorem + " " + this.ipsum
</script>

<style lang="scss" scoped>
    .pug {
        h2 {
            color: crimson;
        }
    }
</style>
