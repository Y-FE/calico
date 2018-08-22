import CcContainer from './src/container';

CcContainer.install = function(Vue) {
    Vue.component(CcContainer.name, CcContainer);
};
    
export default CcContainer;