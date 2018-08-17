import CcGrid from './src/grid';

CcGrid.install = function(Vue) {
    Vue.component(CcGrid.name, CcGrid);
};
    
export default CcGrid;