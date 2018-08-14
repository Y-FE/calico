import CcMain from './src/main';

CcMain.install = function(Vue) {
    Vue.component(CcMain.name, CcMain);
};
    
export default CcMain;