import inputNumber from './src/inputNumber';
import title from '@hoc/title';
const CcInputNumber = title(inputNumber);
CcInputNumber.install = function(Vue) {
    Vue.component(CcInputNumber.name, CcInputNumber);
};
    
export default CcInputNumber;