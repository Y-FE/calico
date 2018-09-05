import CcModal from './src/modal';

CcModal.install = function(Vue) {
    Vue.component(CcModal.name, CcModal);
};
    
export default CcModal;