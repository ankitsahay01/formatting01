const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const codeCoverage = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      reportDir: 'mochawesome-report/.jsons',
      overwrite: false,
      html: false,
      json: true,
      charts: true,
      reportPageTitle: 'Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Register the code coverage task
      codeCoverage(on, config);

      // Register the cucumber preprocessor
      on('file:preprocessor', cucumber());

      // Register the Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      return config; // Return the config object
    },
    baseUrl: 'https://www.rcwilley.com/',
    specPattern: 'cypress/e2e/features/**/*.feature',
    chromeWebSecurity: false
  },
});