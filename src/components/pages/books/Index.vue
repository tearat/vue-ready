<template>
    <div class="page">
        <h2 class="page__subheader">Books</h2>
        <router-link :to="{ name: 'addBook' }" class="container__links__link">Add book</router-link>
        <hr>
        <!-- <p>books: {{ books }}</p> -->
        <div v-if="books" v-for="book in books">
            <h3><router-link :to="{ name: 'book', params: {id: book.id} }">{{ book.title }}</router-link></h3>
            <p><strong>ISBN:</strong> {{ book.isbn }}</p>
            <p><strong>Author:</strong> {{ book.author }}</p>
            <!-- <p>image: {{ book.image }}</p> -->
            <hr>
        </div>
    </div>
</template>


<script>

import axiator from '~/service/axiator'
import axios from 'axios'

export default {
    data() {
        return {
            books: null
        }
    },
    methods: {
        getData() {
            var that = this;
            axios.all([
                axiator.get('/books'),
            ])
            .then(axios.spread((books) => {
                that.books = books.data
            }))
            .catch(function(error) {
                console.log(error);
            })
        }
    },
    async mounted() {
        await this.getData()
    }
}

</script>


<style scoped lang="sass">

.page
    h3
        font-size: 24px
        background: #ddd
        padding: 5px
        a
            display: block
            text-decoration: none
    p
        padding-left: 5px

</style>
