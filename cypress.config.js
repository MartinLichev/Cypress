const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.thesun.co.uk/',
    env: {
      username: 'martin.lichev1@gmail.com',
      password: 'Marmitonko@109'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});