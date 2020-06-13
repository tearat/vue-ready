<template>
<div class="page">
    <h2 class="page__subheader">Add book</h2>
    <!-- book: {{ book }} -->
    <hr>
    <div v-if="book">
        <form class="form" @submit.prevent="sendForm($event)">
            <div class="form-block">
                <label>Title:</label>
                <input type="text" v-model="book.title" class="header" name="title">
            </div>
            <div class="form-block">
                <label>ISBN:</label>
                <input type="text" v-model="book.isbn" name="isbn">
            </div>
            <div class="form-block">
                <label>Author:</label>
                <input type="text" v-model="book.author" name="author">
            </div>
            <div class="form-block">
                <label>File:</label>
                <input type="file" name="file" ref="file" id="file" accept=".jpg,.jpeg,.png">
            </div>
            <p v-for="error in errors" class="error-text">{{ error }}</p>
            <hr>
            <button type="submit">Create</button>
        </form>
        <hr>
    </div>
    <hr>
</div>
</template>


<script>
import axiator from '~/service/axiator'
import axios from 'axios'

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
            this.errors.length = 0
            let fields = Object.values(this.book)
            if (fields.filter(field => field.trim()).length < fields.length) this.errors.push("Заполнены не все данные")
            if (parseInt(Number(this.book.isbn)) != this.book.isbn) this.errors.push("ISBN должен быть числом")
            return (this.errors.length > 0) ? false : true
        },
        sendForm(event) {
            if( !this.validate() ) return false
            event.preventDefault()
            var formData = new FormData();
            var imagefile = this.$refs.file
            formData.append("image", imagefile.files[0]);
            formData.append("title", this.book.title);
            formData.append("isbn", this.book.isbn);
            formData.append("author", this.book.author);

            var that = this;
            axiator({
                method: 'post',
                url: `/books`,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: formData
            })
            .then(function(response) {
                // console.log(response.data);
                that.$router.push({
                    name: 'book',
                    params: {
                        id: response.data.insertId
                    }
                })
            })
            .catch(function(error) {
                console.log(error);
            });
        },
    },
}
</script>


<style lang="sass" scoped>

.form
    .form-block
        label
            width: 120px
            display: inline-block
            text-align: right
            padding-right: 5px
        input
            width: 300px
            padding: 5px
            border: none
            background: #ddd
            font-size: 16px
        input.header
            font-size: 20px
    .error-text
        padding: 5px
        background: firebrick
        color: white

</style>
