// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (email, password) => {
    if (email) {
      cy.fixture("data").then((data) => {
        cy.get(data.selectors.loginField).type(email);
      });
    }
    if (password) {
      cy.fixture("data").then((data) => {
        cy.get(data.selectors.passwordField).type(password);
      });
    }
    cy.fixture("data").then((data) => {
      cy.get(data.selectors.loginButton).click();
    });
  });
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })