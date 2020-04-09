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
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@Boom/Core': path.resolve(__dirname, 'packages/Core/src'),
            '@Boom/SoundPIXI': path.resolve(__dirname, 'packages/SoundPIXI/src'),
            '@Boom/GraphicsPIXI': path.resolve(__dirname, 'packages/GraphicsPIXI/src'),
            '@Boom/NetworkAxios': path.resolve(__dirname, 'packages/NetworkAxios/src')
        }
    }
}