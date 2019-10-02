// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import postSlack from '../reports/slack/PostToSlack';

// Retry mechanism //
Cypress.env('RETRIES', 2);

const url = 'https://beta-aol-account.ao-qa.com/login';

beforeEach(function() {
	cy.visit(url);
});

after(() => {
	postSlack();
});

Cypress.Commands.add('enterEmailAndPassword', (email, password) => {
	cy.get('#input-email').type(email);
	cy.get('#input-password').type(password);
});

Cypress.Commands.add('submitLogin', () => {
	cy.get('[data-testid=submit-login]').click();
});

addMatchImageSnapshotCommand({
	capture: 'viewport',
	failureThresholdType: 'percent',
	failureThreshold: 0.05
});
