import CcTooltip from './src/tooltip';

CcTooltip.install = function(Vue) {
    Vue.component(CcTooltip.name, CcTooltip);
};
    
export default CcTooltip;