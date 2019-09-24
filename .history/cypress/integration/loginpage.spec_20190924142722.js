import LoginPage from '../elements/pages/LoginPage';

const login = new LoginPage();

describe('Log in functionality', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		login.visit();
		login.inputEmail('wrong@email.com');
		login.inputPassword('secret');
		login.submitLogin();
		cy.wait(500);
		login
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});

	it('should successfully log in when end user inputs registered email and password', () => {
		login.visit();
		login.inputEmail('qatestao@gmail.com');
		login.inputPassword('&zcX&k0G6N2');
		login.submitLogin();
		cy.wait(500);
	});
});
