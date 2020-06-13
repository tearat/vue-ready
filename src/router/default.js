import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '../components/pages/Index.vue';

import Books from '../components/pages/books/Index.vue';
import Book from '../components/pages/books/Show.vue';
import AddBook from '../components/pages/books/Create.vue';

import Test from '../components/pages/Test.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index, name: 'index' },
        { path: '/test', component: Test },
        { path: '/add', component: AddBook, name: 'addBook' },
        { path: '/books/:id', component: Book, name: 'book' },
        { path: '/books', component: Books, name: 'books' },
    ]
})
