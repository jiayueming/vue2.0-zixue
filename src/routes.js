import Vue from 'vue';
import Router from 'vue-router';
import form from './components/header.vue'
import computed from './components/computed.vue'
import watched from './components/watched.vue'
import drag from './components/drag.vue'

//注册
Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            component: form,
            name: 'form'
        },
        {
            path: '/form',
            component: form,
            name: 'form'
        },
        {
            path: '/computed',
            component: computed,
            name: 'computed'
        },
        {
            path: '/watched',
            component: watched,
            name: 'watched'
        },
        {
            path: '/drag',
            component: drag,
            name: 'drag'
        },
    ]
})