const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        engine: './src/index.ts'
    }
}