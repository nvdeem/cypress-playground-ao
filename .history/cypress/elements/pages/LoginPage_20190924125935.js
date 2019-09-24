class LoginPage {
	constructor() {}

	visit() {
		console.log('in visit');
		cy.visit('https://beta-aol-account.ao-qa.com/login');
	}
}

export default LoginPage;
