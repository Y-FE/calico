import CcTabItem from './src/tabItem';

CcTabItem.install = function(Vue) {
    Vue.component(CcTabItem.name, CcTabItem);
};
    
export default CcTabItem;