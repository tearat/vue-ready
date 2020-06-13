<template>
<div class="page">
    <h2 class="page__subheader">Book</h2>
    <!-- <p>book: {{ book }}</p> -->
    <!-- <p>bookEdit: {{ bookEdit }}</p> -->
    <!-- <p>errors: {{ errors }}</p> -->
    <hr>
    <div v-if="book">
        <div v-show="!edit" class="form">
            <img :src="serverPath + book.image_path" v-if="book.image_path" @click="editOn('file')">
            <div class="form-block">
                <label>Title:</label>
                <h3 @click="editOn('title')">{{ book.title }}</h3>
            </div>
            <div class="form-block">
                <label>ISBN:</label>
                <p @click="editOn('isbn')" ref="isbn">{{ book.isbn }}</p>
            </div>
            <div class="form-block">
                <label>Author:</label>
                <p @click="editOn('author')">{{ book.author }}</p>
            </div>
            <div class="form-block">
                <label>Delete:</label>
                <button @click="editOn('delete')">Delete file</button>
            </div>
            <hr>
            <button @click="edit = !edit">Edit</button>
            <button @click="sendDeleteForm">Delete</button>
        </div>

        <form v-show="edit" class="form" @submit.prevent="sendForm($event)">
            <img :src="serverPath + book.image_path" v-if="book.image_path" @click="editOn('file')">
            <div class="form-block">
                <label>Title:</label>
                <input type="text" v-model="bookEdit.title" class="header" ref="title">
            </div>
            <div class="form-block">
                <label>ISBN:</label>
                <input type="text" v-model="bookEdit.isbn" ref="isbn">
            </div>
            <div class="form-block">
                <label>Author:</label>
                <input type="text" v-model="bookEdit.author" ref="author">
            </div>
            <div class="form-block" v-if="book.image_path">
                <label>Delete:</label>
                <input type="checkbox" v-model="bookEdit.delete" ref="delete">
            </div>
            <div class="form-block" v-show="!book.image_path">
                <label>Image:</label>
                <input type="file" name="file" ref="file" id="file" accept=".jpg,.jpeg,.png" v-show="!book.image_path">
            </div>
            <p v-for="error in errors" class="error-text">{{ error }}</p>
            <hr>
            <button type="button" @click="edit = !edit">Cancel</button>
            <button type="submit">Save</button>
        </form>
    </div>
</div>
</template>


<script>
import axiator from '~/service/axiator'
import axios from 'axios'
import config from '~/../config'

export default {
    data() {
        return {
            book: null,
            bookEdit: {},
            edit: false,
            errors: []
        }
    },
    computed: {
        serverPath() {
            return `http://${config.api.host}:${config.api.port}/storage/`
        }
    },
    methods: {
        editOn(field) {
            this.edit = true
            this.$nextTick(function() {
                this.$refs[field].focus()
                if( field == 'file' || field == 'delete' ) this.$refs[field].click()
            })
        },
        getData() {
            var that = this;
            axios.all([
                    axiator.get(`/books/${this.$route.params.id}`),
                ])
                .then(axios.spread((book) => {
                    that.book = book.data
                    this.bookEdit.title = book.data.title
                    this.bookEdit.isbn = book.data.isbn
                    this.bookEdit.author = book.data.author
                    this.bookEdit.delete = false
                }))
                .catch(function(error) {
                    console.log(error);
                })
        },
        validate() {
            this.errors.length = 0
            let fields = Object.values(this.bookEdit).splice(0,3)
            if (fields.filter(field => field.toString().trim()).length < fields.length) this.errors.push("Заполнены не все данные")
            if (parseInt(Number(this.bookEdit.isbn)) != this.bookEdit.isbn) this.errors.push("ISBN должен быть числом")
            return (this.errors.length > 0) ? false : true
        },
        sendForm() {
            if (!this.validate()) return false
            event.preventDefault()
            var formData = new FormData();
            var imagefile = this.$refs.file
            if( !this.bookEdit.delete ) {
                formData.append("image", imagefile.files[0]);
            }
            formData.append("title", this.bookEdit.title);
            formData.append("isbn", this.bookEdit.isbn);
            formData.append("author", this.bookEdit.author);
            formData.append("delete", this.bookEdit.delete);

            var that = this;
            axiator({
                method: 'put',
                url: `/books/${this.$route.params.id}`,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: formData
            })
            .then(function(response) {
                that.getData()
                that.edit = false
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        sendDeleteForm() {
            if (!confirm("are you sure?")) return false
            var that = this;
            axiator({
                    method: 'delete',
                    url: `/books/${this.$route.params.id}`,
                })
                .then(function(response) {
                    // console.log(response.data);
                    that.$router.push({
                        name: 'books'
                    })
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    async mounted() {
        await this.getData()
        document.onkeydown = (event) => {
            if (event.keyCode == 27) this.edit = false
        }
    }
}
</script>


<style lang="sass" scoped>

.form
    img
        height: 300px
        cursor: pointer
    .form-block
        h3,
        p
            display: inline-block
            width: 300px
            margin: 0
            padding: 5px
            font-weight: 300
            cursor: pointer
        h3
            font-size: 20px
        label
            width: 80px
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
        input[type='checkbox']
            width: auto
    // input[type='file']
    //     display: none
    .error-text
        padding: 5px
        background: firebrick
        color: white

button
    padding: 5px 20px
    background: royalblue
    color: white
    border: none

</style>
