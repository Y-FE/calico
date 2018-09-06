import CcProgress from './src/progress';

CcProgress.install = function(Vue) {
    Vue.component(CcProgress.name, CcProgress);
};
    
export default CcProgress;