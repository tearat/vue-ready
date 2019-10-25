import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '../components/pages/Index.vue';
import Test from '../components/pages/Test.vue';
import Vuetify from '../components/pages/Vuetify.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '/test', component: Test },
        { path: '/vuetify', component: Vuetify }
    ]
})
