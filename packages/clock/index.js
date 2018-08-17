import CcClock from './src/clock';

CcClock.install = function(Vue) {
    Vue.component(CcClock.name, CcClock);
};
    
export default CcClock;