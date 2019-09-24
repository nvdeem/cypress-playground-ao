import { page, visitable, fillable, clickable } from 'cypress-page-object';

//-PAGE-//
const loginPage = page({
	visit: visitable('https://beta-aol-account.ao-qa.com/login'),
	fillEmail: fillable('#input-email'),
	fillPassword: fillable('#input-password'),
	submit: cy.click('[data-testid=submit-login]'),

	errorMessage() {
		return cy.get('.u-c--error');
	}
});

//-TESTS-//

describe('Log in page tests', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		loginPage
			.visit()
			.fillEmail('wrongemail@ao.com')
			.fillPassword('wrongpassword')
			.submit()
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});
});
