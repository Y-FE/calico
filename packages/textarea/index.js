import textarea from './src/textarea';
import title from '@hoc/title';
const CcTextarea = title(textarea);
CcTextarea.install = function(Vue) {
    Vue.component(CcTextarea.name, CcTextarea);
};
    
export default CcTextarea;