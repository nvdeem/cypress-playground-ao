class LoginPage {
	constructor() {}

	export visit() {
		cy.visit('https://beta-aol-account.ao-qa.com/login');
	}
}

export default LoginPage;
