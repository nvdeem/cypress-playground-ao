/* Class contains elements that appear on the Login page */
class LoginPage {
	constructor() {}

	inputEmail(email) {
		cy.get('#input-email').type(email);
	}

	inputPassword(password) {
		cy.get('#input-password').type(password);
	}

	submitLogin() {
		cy.get('[data-testid=submit-login]').click();
	}

	errorMessage() {
		return cy.get('.u-c--error');
	}
}

export default LoginPage;
