const fs = require('fs');
const path = require('path');

const common = require('./common');

const indexTemplate = require('./template/index');
const componentTemplate = require('./template/src/component');

let name = process.argv[2];
let componentName = common.componentName(name);

let indexFile = indexTemplate(name, componentName);
let componentFile = componentTemplate(componentName);
let packageDir = `../packages/${name}`;

fs.mkdirSync(path.join(__dirname, packageDir));
fs.mkdirSync(path.join(__dirname, packageDir, 'src'));
fs.writeFileSync(path.join(__dirname, packageDir, 'index.js'), indexFile);
fs.writeFileSync(
    path.join(__dirname, packageDir, 'src', `${name}.vue`),
    componentFile
);
