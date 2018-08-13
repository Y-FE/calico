import CcOption from './src/option';

CcOption.install = function(Vue) {
    Vue.component(CcOption.name, CcOption);
};
    
export default CcOption;