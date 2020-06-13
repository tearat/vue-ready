<template>
<div class="page">
    <h2 class="page__subheader">Add book</h2>
    <!-- book: {{ book }} -->
    <hr>
    <div v-if="book">
        <div class="form" @keyup.enter="sendForm">
            <p>Title:</p>
            <input type="text" v-model="book.title" class="header">
            <p>ISBN:</p>
            <input type="text" v-model="book.isbn">
            <p>Author:</p>
            <input type="text" v-model="book.author">
            <p v-for="error in errors" class="error-text">{{ error }}</p>
            <hr>
            <button @click="sendForm">Create</button>
        </div>
        <hr>
    </div>
    <hr>
</div>
</template>


<script>
import axiator from '~/service/axiator'
import axios from 'axios'
import $ from 'jquery'

export default {
    data() {
        return {
            book: {
                title: '',
                isbn: '',
                author: '',
            },
            errors: []
        }
    },
    methods: {
        validate() {
            this.errors = []
            if( !this.book.title.trim() || !this.book.isbn.trim() || !this.book.author.trim() ) this.errors.push("Заполнены не все данные")
            if( parseInt(Number(this.book.isbn)) != this.book.isbn ) this.errors.push("ISBN должен быть числом")
            if( this.errors.length > 0 ) return false
            return true
        },
        sendForm() {
            if( !this.validate() ) return false
            var that = this;
            axiator({
                method: 'post',
                url: `/books`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: that.book
            })
            .then(function(response) {
                // console.log(response.data);
                that.$router.push({ name: 'book', params: { id: response.data.insertId } })
            })
            .catch(function(error) {
                console.log(error);
            });
        },
    },
}
</script>


<style lang="scss" scoped>
* {
    font-family: Arial;
}

.show {
    h3,
    p {
        margin: 0;
        padding: 5px;
        font-weight: 300;
    }
    h3 {
        font-size: 20px;
    }
}

.form {
    input {
        padding: 5px;
        border: none;
        background: #ddd;
        display: block;
        font-size: 16px;
    }
    input.header {
        font-size: 20px;
    }
    .error-text {
        padding: 5px;
        background: firebrick;
        color: white;
    }
}
</style>
