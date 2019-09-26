/* Login page tests */
import LoginPage from '../elements/pages/LoginPage';

const loginPg = new LoginPage();

/* Retry mechanism */
Cypress.env('RETRIES', 2);

describe('Log in functionality', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		cy.enterEmailAndPassword('wrong@email.com', 'secret');
		cy.submitLogin();
		loginPg
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});

	it('should successfully log in when end user inputs registered email and password', () => {
		cy.enterEmailAndPassword('qatestao@gmail.com', '&zcX&k0G6N2');
		cy.submitLogin();
		cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/home/');
	});
});
