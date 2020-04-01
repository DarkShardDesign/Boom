const baseConfig = require('../../webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
    ...baseConfig,
    entry: {
        "js/demo": './src/index.ts'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boom Demo\'s',
            scriptLoading: 'defer',
            template: './src/assets/index.html',
            filename: 'index.html'
        })
    ],
}

const serverConfig = {
    ...baseConfig,
    entry: {
        "server": './src/server.ts'
    },
    target: 'node',
    node: {
        fs: 'empty'
    }
}

module.exports = [ serverConfig, clientConfig ];