///<reference types="cypress"/>


//Mejora en el código cuando trabajamos sobre una api, utilizando intercept para escuchar la petición GET /search y esperar antes de ejecutar algo.

describe('codigo duplicado', () => {
    beforeEach(() => {
        cy.intercept( 
            'GET',
            '**/search**'
        ).as('getStories')
        //Escucha toodas las peticiones GET que contengan /search y dales el alias @getStories
        //simbolo ** significa ver antes y después

        cy.visit('https://hackernews-seven.vercel.app/') //Carga la página
        cy.wait('@getStories') // Espera a que la página termine de cargar los datos de la API /search

        cy.get('input[type="text"]').should('be.visible').and('have.value','redux').as('BuscarCampo').clear()
        //Encuentra el input de texto, verifica que sea visible y tengo el valor inicial 'redux' (búsqueda inicial por defecto)
        //Lo almacena en alias llamado SearchField
        //Lo limpia (.clear())
    });

    const buscarpor = ['frontend','vuejs','reactjs'] //Se agrega skip en nuestros test y se crea esta lista para trabajar tema de duplicidad

    buscarpor.forEach(item=>{ //Este código reemplaza los dos test duplicados con distinta búsqueda
        it(`Busca por "${item}"`, () => { //El profesor cambia el código por este (mostrará el item en el nombre de nuestro test), ya que le daba error el 'Buscar por lista'
        //it ('Buscar por lista', () =>{
            cy.search(item)
            cy.wait('@getStories')

            cy.get('.table-row').its('length').should('be.to.least',1)
            
            /*********Otro método
            cy.get('.table-row').then(rows=>{
                expect(rows.length).to.be.least(1)
            })**************************************************/
            
            /*********Otro método, Se deja como comentario mientras el código ejecutado
            cy.wait('@getStories').then(({response})=>{
                const quantidade = response.body.hits.length

                cy.get('.table-row').should('have.length',quantidade)

            })   ******/        
        });
    })






    it.skip('Buscar el artículo vuejs', () => {

        cy.get('@SearchField').type('vuejs{enter}') //Esto usa el alias definido antes, y le pasas {enter} envía Enter
        cy.wait('@getStories') //Otra vez espera a la petición /search

        cy.get('.table-row').should('have.length',100) //Confirma que hay 100 filas
        
    });


    it.skip('Buscar el artículo reactjs', () => {

        cy.get('@SearchField').type('reactjs{enter}') //Esto usa el alias definido antes, y le pasas {enter} envía Enter
        cy.wait('@getStories') //Otra vez espera a la petición /search

        cy.get('.table-row').should('have.length',100) //Confirma que hay 100 filas
        
    });


});