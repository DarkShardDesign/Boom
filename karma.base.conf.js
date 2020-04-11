const realBrowser = String(process.env.BROWSER).match(/^(1|true)$/gi)
const travisLaunchers = {
  chrome_travis: {
    base: 'Chrome',
    flags: [ '--no-sandbox' ]
  }
}

const localBrowsers = realBrowser ? Object.keys(travisLaunchers) : [ 'Chrome' ]

const BaseConfig = {
    frameworks: [ 'jasmine', 'karma-typescript' ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-typescript',
      'karma-spec-reporter'
    ],
    karmaTypescriptConfig: {
      tsconfig: "../../tsconfig.tests.json",
    },
    client: {
      // leave Jasmine Spec Runner output visible in browser
      clearContext: false
    },
    files: [ { pattern: "src/**/*.ts" }, { pattern: "tests/**/*.ts" } ],
    preprocessors: {
      '**/*.ts': [ 'karma-typescript' ]
    },
    reporters: [ 'spec', 'karma-typescript' ],
    colors: true,
    autoWatch: true,
    browsers: localBrowsers,
    singleRun: true
  }

  module.exports = {
    localBrowsers,
    BaseConfig
  }