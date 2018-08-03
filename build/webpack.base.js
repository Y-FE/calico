module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: 'calico.common.js',
        chunkFilename: '[id].js',
        libraryTarget: 'commonjs2'
    }
};
