import Vue from 'vue';
import calico from '../src/index.js';

import App from './App.vue';
console.log(calico);
Vue.use(calico);

new Vue({
    el: '#app',
    render(h) {
        return h('app');
    },
    components: {
        App
    }
});
