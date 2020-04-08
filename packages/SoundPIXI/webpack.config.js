const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        "js/sound-pixi": './src/index.ts'
    }
}