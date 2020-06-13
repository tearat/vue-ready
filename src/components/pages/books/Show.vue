<template>
<div class="page">
    <h2 class="page__subheader">Book</h2>
    <!-- id: {{ this.$route.params.id }} -->
    <hr>
    <div v-if="book">
        <div v-if="!edit" class="show">
            <h3 @click="edit = true">{{ book.title }}</h3>
            <p @click="edit = true">{{ book.isbn }}</p>
            <p @click="edit = true">{{ book.author }}</p>
            <hr>
            <button @click="edit = !edit">Edit</button>
            <button @click="sendDeleteForm">Delete</button>
        </div>
        <div v-if="edit" class="form" @keyup.enter="sendForm">
            <input type="text" v-model="book.title" class="header">
            <input type="text" v-model="book.isbn">
            <input type="text" v-model="book.author">
            <hr>
            <button @click="edit = !edit">Cancel</button>
            <button @click="sendForm">Update</button>
        </div>
    </div>
</div>
</template>


<script>
import axiator from '~/service/axiator'
import axios from 'axios'

export default {
    data() {
        return {
            book: null,
            edit: false,
        }
    },
    methods: {
        getData() {
            var that = this;
            axios.all([
                axiator.get(`/books/${this.$route.params.id}`),
            ])
            .then(axios.spread((book) => {
                that.book = book.data
            }))
            .catch(function(error) {
                console.log(error);
            })
        },
        sendForm() {
            var that = this;
            axiator({
                method: 'put',
                url: `/books/${this.$route.params.id}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: that.book
            })
            .then(function(response) {
                // console.log(response.data);
                that.edit = false
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        sendDeleteForm() {
            if( !confirm("are you sure?") ) return false
            var that = this;
            axiator({
                method: 'delete',
                url: `/books/${this.$route.params.id}`,
            })
            .then(function(response) {
                console.log(response.data);
                that.$router.push({ name: 'books' })
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    },
    async mounted() {
        await this.getData()
    }
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
        cursor: pointer;
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
}
</style>
