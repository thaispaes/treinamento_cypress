const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.automationpractice.pl/',
    specPattern: 'cypress/e2e/**/*.feature',
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber());
    },
  },
});
