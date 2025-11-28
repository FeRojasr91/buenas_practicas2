/// <reference types="cypress" />
//Este Test proviene de una pagina diseñada por el profe desde su puerto localhost:3000. 
// Se debe cambiar tambn el cypress.config.js dejando:
/*
  const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:3000'
    },
   video: false,
})
   */
describe('Flak Teste', () =>{
    beforeEach(() => {
        cy.visit('/')
    });
    
    for (let k=0; k>10; k++){
    
         it ('Adicionar curso', () => {
        
             cy.get('input[name="name"]').click().type('Alex')
             cy.get('input[name="email"]').click().type('alex@gmail.com')

             cy.get('select[name="department"]').select('core')
             cy.get('select[name="course"]').select('git-it')

             cy.get('input[type="submit"]').click()
             cy.get('input[value="Saved!"]',{timeout:3000}).should('be.visible')
        

        });
    }
});