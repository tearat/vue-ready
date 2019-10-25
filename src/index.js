import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import router from '~/router/default.js';

import store from '~/store'

import Root from '~/components/Root.vue';

require('~/public/style/main.scss');
require('~/public/fonts/OpenSans-Light.ttf');

new Vue({
    el: '#app',
    router,
    store,
    components: { Root },
    template: '<Root/>'
})

console.log("Frontend (DEV) server started on port: 8080");
