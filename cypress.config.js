// const { defineConfig } = require("cypress");
// const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");
// require("dotenv").config();

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://automationteststore.com",
//     // baseURL: "https://dummyjson.com",
//     // screenshotOnRunFailure: true,
//     trashAssetsBeforeRuns: true,
//     specPattern: "cypress/e2e/**/*.js",
//     setupNodeEvents(on, config) {
//       return getCompareSnapshotsPlugin(on, config);
//     },
//   },

//   env: {
//     automation_store: "https://automationteststore.com",
//   },
//   chromeWebSecurity: false,
// });
const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationteststore.com",
    trashAssetsBeforeRuns: true,
    specPattern: "cypress/e2e/**/*.js",

    setupNodeEvents(on, config) {
      // Load plugin for visual snapshots
      getCompareSnapshotsPlugin(on, config);

      // Use dynamic import for ESM-only HTML report
      on("task", {
        async generateHtmlReport() {
          const { generate } = await import("cypress-image-diff-html-report");
          await generate();

          return null;
        },
      });

      return config;
    },
  },

  env: {
    automation_store: "https://automationteststore.com",
  },
  chromeWebSecurity: false,
});
