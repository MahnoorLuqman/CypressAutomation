/// <reference types="Cypress" />
describe('my first test suit',function(){

it('my first test case', function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type("cucumber")
    cy.get('.search-button').click()
})

//sample comment

})




