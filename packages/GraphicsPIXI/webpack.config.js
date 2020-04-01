const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        "js/graphics-pixi": './src/index.ts'
    }
}