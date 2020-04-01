const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        "sound-pixi": './src/index.ts'
    }
}