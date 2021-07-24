/// <reference types="cypress" />

describe("renders sign up page",() => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/Signup")
    })
    it("Should render page component", ()=>{
        it("Signup test", ()=>{
            cy.get('form');
        })
    
    })

    it("Should render signup field", ()=>{
        cy.get('[name="name"]');
        cy.get('[name="email"]');
        cy.get('[name="password"]');
        cy.get('[name="password_confirmation"]');
        cy.get('select').contains('The Corner Store Network');
        cy.get('[type="submit"]').click();
    })

})