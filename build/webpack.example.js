const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: ['./example/example.test.js']
    }
});
module.exports.output = {};
