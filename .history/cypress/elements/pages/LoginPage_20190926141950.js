/* Class contains elements that appear on the Login page */
class LoginPage {
	constructor() {}

	errorMessage() {
		return cy.get('.u-c--error');
	}
}

export default LoginPage;
