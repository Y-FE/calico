import CcMenuItem from './src/menuItem';

CcMenuItem.install = function(Vue) {
    Vue.component(CcMenuItem.name, CcMenuItem);
};
    
export default CcMenuItem;