import CcPreview from './src/preview';

CcPreview.install = function(Vue) {
    Vue.component(CcPreview.name, CcPreview);
};
    
export default CcPreview;