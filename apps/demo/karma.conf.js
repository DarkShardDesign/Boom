// // Karma configuration
const { BaseConfig } = require('../../karma.base.conf');

module.exports = (config) => {
  config.set({
    ...BaseConfig,
    exclude: ['*/server.ts*'],  
    logLevel: config.LOG_INFO
  })
}