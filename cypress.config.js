const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,  //Toda vez que editar um arquivo e salvar, o cypress não reexecuta o teste

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});