import lineSelect from './src/lineSelect';
import title from '@hoc/title';
const CcLineSelect = title(lineSelect);

CcLineSelect.install = function(Vue) {
    Vue.component(CcLineSelect.name, CcLineSelect);
};
    
export default CcLineSelect;