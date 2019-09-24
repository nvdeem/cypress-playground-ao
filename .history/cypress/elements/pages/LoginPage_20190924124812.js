class LoginPage {
	constructor() {}

	visit() {
		cy.visit('https://beta-aol-account.ao-qa.com/login');
	}
}

export default LoginPage;
