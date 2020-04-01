const baseConfig = require('../../webpack.base.config');

module.exports = {
    ...baseConfig,
    entry: {
        core: './src/index.ts'
    }
}