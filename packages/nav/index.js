import CcNav from './src/nav';

CcNav.install = function(Vue) {
    Vue.component(CcNav.name, CcNav);
};
    
export default CcNav;