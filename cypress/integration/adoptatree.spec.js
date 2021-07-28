/// <reference types="cypress" />

describe("renders the addoption page",() => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/Adopt")
    })
    it("should render stats component", () =>{
    cy.get('.header-adopt-title');
    cy.get('#quantity');
    cy.get('form > p')
    cy.get('.btn').click();
})

})
