import CcToolItem from './src/toolItem';

CcToolItem.install = function(Vue) {
    Vue.component(CcToolItem.name, CcToolItem);
};
    
export default CcToolItem;