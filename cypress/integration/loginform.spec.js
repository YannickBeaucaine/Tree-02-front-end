/// <reference types="cypress" />

describe("renders the home page",() => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/")
    })
    it("render navbar", ()=>{
        cy.get('.navbar-brand > img').click();
        cy.get('#responsive-navbar-nav');
        cy.get('[href="/Partners"]').click();
        cy.get('[href="/About"]').click();
        cy.get('[href="/About"]').click();
    })

 
    it("login test", ()=>{
        cy.get('.email-input');
        cy.get('.password-input');
        cy.get('.submit-button').click();
    })
    it("should render stats component", () =>{
        cy.get('.stats-section');
        cy.get('.col-lg-12 > .text-uppercase');
        cy.get(':nth-child(1) > .container > .stat-card > .stat-image > img');
        cy.get(':nth-child(2) > .container > .stat-card > .stat-image > img');
        cy.get(':nth-child(3) > .container > .stat-card > .stat-image > img');
        cy.get(':nth-child(4) > .container > .stat-card > .stat-image > img');
        cy.get(':nth-child(1) > .container > .stat-card > .stat-image > .card-body > .card-text-secondary');
    })
  



})
    
    


 