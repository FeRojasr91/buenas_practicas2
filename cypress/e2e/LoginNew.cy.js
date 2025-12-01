/// <reference types="cypress" />
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe('Test con Page Object', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    it('Test para login', () => {
        homePage.visit();
        loginPage.IngresarEmail('lecosta12@hotmail.com');
        loginPage.IngresarSenha('A#ula281');
        loginPage.PresionarBotonSubmit();
        
    });
});