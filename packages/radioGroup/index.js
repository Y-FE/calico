import radioGroup from './src/radioGroup';
import title from '@hoc/title';
const CcRadioGroup = title(radioGroup);
CcRadioGroup.install = function(Vue) {
    Vue.component(CcRadioGroup.name, CcRadioGroup);
};
    
export default CcRadioGroup;