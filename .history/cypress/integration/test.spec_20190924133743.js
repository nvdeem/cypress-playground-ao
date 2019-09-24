import LoginPage from '../elements/pages/LoginPage';

const login = new LoginPage();

describe('Log in page tests', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		login.visit().inputIncorrectEmail();
		login.inputPassword();
		login.submitLogin();
		cy.wait(200);
		login
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});
});
