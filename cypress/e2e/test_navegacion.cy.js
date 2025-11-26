///<reference types="cypress"/>

describe('Malas practicas de prueba del navegador', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com')
    });

    it('Direcciona para una pagina de Login', () => {
      cy.contains('.nav a', 'Login').click() 

      cy.url().should('be.equal', 'https://notes-serverless-app.com/login')        
    });

    it('Verificacion de href', () => {
      cy.contains('.nav a', 'Login').should('have.attr','href', '/login').and('not.have.attr','target')
      
    });
});