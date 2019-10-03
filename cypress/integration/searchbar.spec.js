const url = 'https://beta-aol.ao-qa.com/';

beforeEach(function() {
	cy.visit(url);
	cy.url().should('include', url);
});

describe('Search works correctly', () => {
	it('should show dropdown suggestions after 1 characters', () => {
		cy.search('f');
		cy.get('#ui-id-1').should('be.visible');
	});
	it('should redirect to the selected product page if product is selected from the dropdown', () => {
		cy.search('fridge');
		cy.selectFirstChildFromSearchDropdown();
		cy.url().should('include', '.com/product');
	});
	it('should redirect to relevant page after searching', () => {
		cy.search('radiator').type('{enter}');
		cy.url().should('include', 'radiator');
	});
});
