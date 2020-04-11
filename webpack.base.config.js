const path = require('path');

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx|js?$/,
                use: "ts-loader?configFile=tsconfig.build.json"
            },
            {
                test: /\.html|css?$/,
                use: "raw-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
        alias: {
            '@Boom/Core': path.resolve(__dirname, 'packages/Core'),
            '@Boom/SoundPIXI': path.resolve(__dirname, 'packages/SoundPIXI'),
            '@Boom/GraphicsPIXI': path.resolve(__dirname, 'packages/GraphicsPIXI'),
            '@Boom/NetworkAxios': path.resolve(__dirname, 'packages/NetworkAxios')
        }
    }
}