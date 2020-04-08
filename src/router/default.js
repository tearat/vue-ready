import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '../components/pages/Index.vue';
import Test from '../components/pages/Test.vue';
import Someshit from '../components/pages/Someshit.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '/test', component: Test },
        { path: '/someshit', component: Someshit }
    ]
})
