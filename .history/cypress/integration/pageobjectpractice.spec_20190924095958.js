import { page, visitable, fillable, clickable } from 'cypress-page-object';

const loginPage = page({
	visit: visitable('https://beta-aol-account.ao-qa.com/login'),
	fillEmail: fillable('#input-email'),
	fillPassword: fillable('#input-password'),
	submit: clickable('//button[@data-testid="submit-login"]'),

	errorMessage() {
		return cy.get('//div[@class="u-c--error"]');
	}
});

describe('Check login throws error on incorrect email and password', () => {
	it('attempt to login to the website', () => {
		loginPage
			.visit()
			.fillEmail()
			.fillPassword()
			.submit()
			.errorMessage()
			.should('contain', "We don't recognise this email address or password");
	});
});