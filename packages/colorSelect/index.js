import colorSelect from './src/colorSelect';
import title from '@hoc/title';
const CcColorSelect = title(colorSelect);
CcColorSelect.install = function(Vue) {
    Vue.component(CcColorSelect.name, CcColorSelect);
};
    
export default CcColorSelect;