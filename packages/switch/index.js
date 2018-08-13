import CcSwitch from './src/switch';

CcSwitch.install = function(Vue) {
    Vue.component(CcSwitch.name, CcSwitch);
};
    
export default CcSwitch;