import input from './src/input';
import title from '@hoc/title';
const CcInput = title(input);
CcInput.install = function(Vue) {
    Vue.component(CcInput.name, CcInput);
};
    
export default CcInput;