class LoginPage{

    IngresarEmail(username){

        cy.get('#email').type(username)
    }

    IngresarSenha(password){
        cy.get('#password').type(password)
    }

    PresionarBotonSubmit(){
        cy.get('button[type="submit"]').click()
    }
}

export default LoginPage;