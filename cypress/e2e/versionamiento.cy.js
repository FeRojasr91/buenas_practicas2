/// <reference types="cypress" />

describe('Versionamiento', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/login')
    });

    it('No envie datos sensibles', () =>{

        cy.get('#email').type(Cypress.env('user_email'))
        cy.get('#password').type(Cypress.env('user_senha'),{log:false}) //Al agregar el ",{log.false}", evitará que se muestra el valor de la contraseña por pantalla al ejecutar mi código

    });
});