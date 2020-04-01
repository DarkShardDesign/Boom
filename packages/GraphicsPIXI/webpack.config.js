const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        "graphics-pixi": './src/index.ts'
    }
}