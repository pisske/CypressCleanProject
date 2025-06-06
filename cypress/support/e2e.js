// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-plugin-xhr-toggle";
import "cypress-xpath";
// import "cypress-grep";

// cypress/support/{scheme}.js, where {scheme} defaults to e2e
const compareSnapshotCommand = require("cypress-image-diff-js/command");
compareSnapshotCommand();
after(() => {
  cy.task("generateJsonReport", {
    browserName: Cypress.browser.displayName,
    browserVersion: Cypress.browser.version,
    cypressVersion: Cypress.version,
  });
});
