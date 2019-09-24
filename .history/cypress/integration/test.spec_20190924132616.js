import LoginPage from '../elements/pages/LoginPage';

const login = new LoginPage();

describe('Log in page tests', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		login.visit();
		login.inputEmail();
		login.inputPassword();
		login.submit();
		cy.wait(200);
		login
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});
});
