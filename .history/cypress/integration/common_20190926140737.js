beforeEach(() => {
	cy.visit(url);
});

afterEach(() => {
	cy.clearCookies();
});
