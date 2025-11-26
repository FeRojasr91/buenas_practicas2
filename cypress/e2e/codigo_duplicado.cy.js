///<reference types="cypress"/>

describe('codigo duplicado', () => {
    beforeEach(() => {
        cy.intercept( 
            'GET',
            '**/search**'
        ).as('getStories')
        //Escucha toodas las peticiones GET que contengan /search y dales el alias @getStories
        //simbolo ** significa cosa antes y después

        cy.visit('https://hackernews-seven.vercel.app/') //Carga la página
        cy.wait('@getStories') // Espera a que la página termine de cargar los datos de la API /search

        cy.get('input[type="text"]').should('be.visible').and('have.value','redux').as('SearchField').clear()
        //Encuentra el input de texto, verifica que sea visible y tengo el valor inicial 'redux' (búsqueda inicial por defecto)
        //Lo almacena en alias llamado SearchField
        //Lo limpia (.clear())
    });

    it('Buscar el artículo vuejs', () => {

        cy.get('@SearchField').type('vuejs{enter}') //Esto usa el alias definido antes, y le pasas {enter} envía Enter
        cy.wait('@getStories') //Otra vez espera a la petición /search

        cy.get('.table-row').should('have.length',100) //Confirma que hay 100 filas
        
    });


    it('Buscar el artículo reactjs', () => {

        cy.get('@SearchField').type('reactjs{enter}') //Esto usa el alias definido antes, y le pasas {enter} envía Enter
        cy.wait('@getStories') //Otra vez espera a la petición /search

        cy.get('.table-row').should('have.length',100) //Confirma que hay 100 filas
        
    });

    it('Buscar el artículo test', () => {

        cy.get('@SearchField').type('test{enter}') //Esto usa el alias definido antes, y le pasas {enter} envía Enter
        cy.wait('@getStories') //Otra vez espera a la petición /search

        cy.get('.table-row').should('have.length',100) //Confirma que hay 100 filas
        
    });
});