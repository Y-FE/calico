import CcHeader from './src/header';

CcHeader.install = function(Vue) {
    Vue.component(CcHeader.name, CcHeader);
};
    
export default CcHeader;