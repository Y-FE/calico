const util = require('./util');

exports.componentName = function(name) {
    return `Cc${util.upperCaseFirst(name)}`;
};
