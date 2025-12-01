const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //Para el ejercicio de flak_test_cy.js usaron lo siguiente en vez del setupNode
    //baseUrl:'http://'localhost:3000'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
  },
});
