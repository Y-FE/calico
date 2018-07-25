const util = require('./util');

exports.componentName = function(name) {
    return `Yp${util.upperCaseFirst(name)}`;
};
