// // Karma configuration
const { BaseConfig } = require('../../karma.base.conf');

module.exports = (config) => {
  config.set({
      ...BaseConfig,
    logLevel: config.LOG_INFO
  })
}