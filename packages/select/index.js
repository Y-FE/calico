import select from './src/select';
import title from '@hoc/title';
const CcSelect = title(select);
CcSelect.install = function(Vue) {
    Vue.component(CcSelect.name, CcSelect);
};
    
export default CcSelect;