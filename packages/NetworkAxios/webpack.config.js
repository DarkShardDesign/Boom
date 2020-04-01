const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        "js/network-axios": './src/index.ts'
    }
}