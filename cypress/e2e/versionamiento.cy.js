/// <reference types="cypress" />

describe('Versionamiento', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/login')
    });

    it('No envie datos sensibles', () =>{

        cy.get('#email').type(Cypress.env('user_email'))
        cy.get('#password').type(Cypress.env('user_senha'))

    });
});