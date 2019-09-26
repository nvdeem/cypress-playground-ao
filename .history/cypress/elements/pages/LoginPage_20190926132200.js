/* Class contains elements that appear on the Login page,
	as well as useful interactions with those elements */
class LoginPage {
	constructor() {}

	errorMessage() {
		return cy.get('.u-c--error');
	}
}

export default LoginPage;
