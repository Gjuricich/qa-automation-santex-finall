// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    if (username) {
      cy.get("[data-test=username]").clear().type(username);
    } else {
      cy.get("[data-test=username]").clear();
    }
  
    if (password) {
      cy.get("[data-test=password]").clear().type(password);
    } else {
      cy.get("[data-test=password]").clear();
    }
  
    cy.get("[data-test=login-button]").click();
  });

  Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.inventory_item').contains(productName).parents('.inventory_item')
      .find('[data-test^="add-to-cart"]').click();
  });
  

  Cypress.Commands.add('removeProductFromCart', (productName) => {
    cy.get('.cart_item')
      .contains(productName)
      .parents('.cart_item')
      .find('.cart_button')
      .should('be.visible')
      .click();
  });
  
  
   


