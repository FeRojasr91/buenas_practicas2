/// <reference types="cypress" />

describe('Usar Mockado', () => { //mockado (portugues)= imitado, burlado...
    
    beforeEach(()=>{
        cy.visit('https://buger-eats-qa.vercel.app/')
    });    
    
    it('Mapeando dos campos', () => {

        cy.get('a[href="/deliver"]').click()
        cy.get('input[name="postalcode"]').type('88117460')
        cy.fixture('MockCep').then((MockCep)=>{
            cy.intercept('GET','https://viacep.com.br/ws/**',{
                statusCode: 200,
                body:MockCep //Aqui estaría pegando los datos del MockCep.json, sino daría error.

            }).as('MockCepAula')
        })
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.wait('@MockCepAula')        
    });
});