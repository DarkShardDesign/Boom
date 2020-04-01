const baseConfig = require('../../webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...baseConfig,
    entry: {
        demo: './src/index.ts'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boom Demo\'s',
            scriptLoading: 'defer',
            template: './src/assets/index.html',
            filename: 'index.html'
        })
    ]
}