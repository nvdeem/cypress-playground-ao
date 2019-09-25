import LoginPage from '../elements/pages/LoginPage';
import fixtures from '../fixtures/fixtures';

const loginPg = new LoginPage();
const fixt = new fixtures();

describe('Log in functionality', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		loginPg.visit();
		loginPg.inputEmail(cy.fixture(name));
		loginPg.inputPassword('secret');
		loginPg.submitLogin();
		cy.wait(500);
		loginPg
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});

	it('should successfully log in when end user inputs registered email and password', () => {
		loginPg.visit();
		loginPg.inputEmail('qatestao@gmail.com');
		loginPg.inputPassword('&zcX&k0G6N2');
		loginPg.submitLogin();
		cy.url().should(
			'contain',
			'https://beta-aol-account.ao-qa.com/home/order-history'
		);
	});
});
