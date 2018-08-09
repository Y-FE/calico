import Vue from 'vue';
import calico from '../lib/calico.common.js';

Vue.use(calico);

new Vue({
    el: '#app',
    render(h) {
        return h('cc-button', 123);
    }
});
