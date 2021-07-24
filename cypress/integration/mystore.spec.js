/// <reference types="cypress" />

describe("renders the Mystore page",() => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/MyStore")
    })
    it("Should render extnended navbar", ()=>{
        cy.get('[href="/Adopt"]').click();
        cy.get('[href="/MyTrees"]').click();
        cy.get('.navbar-text');
        cy.get('#collasible-nav-dropdown');
        cy.get('[href="/Account"]');
        cy.get('.dropdown-menu > [href="#"]');


    })

    it("Should render stores map", ()=>{
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]');
    })

    it("Should render stores components", ()=>{
        cy.get('.card-title');
        cy.get('.card-img-top');
        cy.get('.col-auto > .text-center')
    })

})