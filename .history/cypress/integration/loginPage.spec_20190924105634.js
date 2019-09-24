import { page, visitable, fillable, clickable } from 'cypress-page-object';

const loginPage = page({
	visit: visitable('https://beta-aol-account.ao-qa.com/login'),
	fillEmail: fillable('#input-email'),
	fillPassword: fillable('#input-password'),
	submit: clickable('[data-testid=submit-login]'),

	errorMessage() {
		return cy.get('.u-c--error');
	}
});
