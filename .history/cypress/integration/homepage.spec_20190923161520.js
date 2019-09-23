describe ("homepage", ()=>{
    beforeEach(()=>{
        cy.visit("https://beta-aol.ao-qa.com/");
    })

    describe('Deals button works correctly', ()=>{
        it('should go to deals page', ()=>{
            cy.get("[data-item-id='top-deals']").click();
            cy.url().should('include', '/deals');
        })
    })
    
    describe('Search works correctly', ()=>{
        it('Should show dropdown suggestions after 1 characters', ()=>{
            cy.get("#searchAOL").type("f");
            cy.get('#ui-id-1').should('be.visible');
        })
        it.only('Should redirect to relevant page after searching', ()=>{
            cy.get("#searchAOL").type("fridge freezer").type('{enter}');
            cy.url().should('include', 'fridge', 'frsezer');
        })
    })

    describe('Help me choose works correctly', ()=>{
        it('Should exist on the page', ()=>{
            cy.get('#hmc').should('be.visible');
        })
        it('Should allow user to select a category', ()=>{
            cy.xpath("//div[@class='hmcChoiceButton hmcButton pulse-1 closed']").click();
            cy.get('.filterBox').should('be.visible');
        })
    })   
})