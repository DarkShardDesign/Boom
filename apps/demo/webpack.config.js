const baseConfig = require('../../webpack.base.config');

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
const path = require('path');

module.exports = {
    entry: {
        demo: './src/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../dist')
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}