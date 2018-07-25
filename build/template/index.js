module.exports = (name, componentName) => {
    return `import ${componentName} from './src/${name}';

${componentName}.install = function(Vue) {
    Vue.component(${componentName}.name, ${componentName});
};
    
export default ${componentName};`;
};
