import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(Vuetify)
export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    values: {
      subgroup: 'fas fa-fish'
    },
})

import router from '~/router/default.js';

import store from '~/store'

import Root from '~/components/Root.vue';

require('~/public/style/main.scss');

new Vue({
    el: '#app',
    router,
    store,
    components: {
        Root
    },
    template: '<Root/>'
})

console.log("Frontend (DEV) server started on port: 8080");
