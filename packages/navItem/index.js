import CcNavItem from './src/navItem';

CcNavItem.install = function(Vue) {
    Vue.component(CcNavItem.name, CcNavItem);
};
    
export default CcNavItem;