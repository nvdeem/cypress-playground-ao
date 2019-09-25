/* Login page tests */

import LoginPage from '../elements/pages/LoginPage';

const loginPg = new LoginPage();

/* Retry mechanism */
Cypress.env('RETRIES', 2);

describe('Log in functionality', () => {
	beforeEach(() => {
		cy.visit('https://beta-aol-account.ao-qa.com/login');
	});

	it('should error when end user inputs an unrecognised email and password', () => {
		loginPg.inputEmail('wrong@email.com');
		loginPg.inputPassword('secret');
		loginPg.submitLogin();
		cy.wait(500);
		loginPg
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});

	it('should successfully log in when end user inputs registered email and password', () => {
		loginPg.inputEmail('qatestao@gmail.com');
		loginPg.inputPassword('&zcX&k0G6N2');
		loginPg.submitLogin();
		cy.wait(500);
		cy.url().should(
			'contain',
			'https://beta-aol-account.ao-qa.com/home/order-history'
		);
	});
});
