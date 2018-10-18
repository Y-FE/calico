import calico from '../../lib/calico.common.js';

function addStylesheet(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.body.appendChild(link);
}

addStylesheet('https://at.alicdn.com/t/font_776059_nrbdrmmhb4.css');

export default ({ Vue }) => {
    Vue.use(calico);
};
