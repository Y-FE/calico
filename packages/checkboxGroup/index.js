import checkboxGroup from './src/checkboxGroup';
import title from '@hoc/title';
const CcCheckboxGroup = title(checkboxGroup);
CcCheckboxGroup.install = function(Vue) {
    Vue.component(CcCheckboxGroup.name, CcCheckboxGroup);
};
    
export default CcCheckboxGroup;