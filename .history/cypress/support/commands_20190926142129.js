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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Retry mechanism //
Cypress.env('RETRIES', 2);

const url = 'https://beta-aol-account.ao-qa.com/login';

beforeEach(function() {
	cy.visit(url);
});

afterEach(function() {
	cy.clearCookies();
});

Cypress.Commands.add('enterEmailAndPassword', (email, password) => {
	cy.get('#input-email').type(email);
	cy.get('#input-password').type(password);
});

Cypress.Commands.add('submitLogin', () => {
	cy.get('[data-testid=submit-login]').click();
});
