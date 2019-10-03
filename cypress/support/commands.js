import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import postSlack from '../reports/functions/PostToSlack';

// -- Retry mechanism -- //
Cypress.env('RETRIES', 2);

// -- Test URL -- //
const url = 'https://beta-aol-account.ao-qa.com/login';

// -- Hooks --//
// beforeEach(function() {
// 	cy.visit(url);
// });

after(() => {
	//	postSlack();
});

// -- Commands -- //
Cypress.Commands.add('enterEmailAndPassword', (email, password) => {
	cy.get('#input-email').type(email);
	cy.get('#input-password').type(password);
});

Cypress.Commands.add('submitLogin', () => {
	cy.get('[data-testid=submit-login]').click();
});

Cypress.Commands.add('search', searchCriteria => {
	cy.get('#searchAOL').type(searchCriteria);
});

Cypress.Commands.add('selectFirstChildFromSearchDropdown', () => {
	cy.get('#ui-id-1')
		.first()
		.click();
});

// -- Snapshot -- //
addMatchImageSnapshotCommand({
	capture: 'viewport',
	failureThresholdType: 'percent',
	failureThreshold: 0.05
});
