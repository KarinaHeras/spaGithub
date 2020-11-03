describe('search for a user', () => {
    it('home show user grid', () => {
        cy.visit('http://localhost:8080/');
        cy.get('#listcard > div:nth-child(2) > div > h4').contains('mojombo');
        cy.get('#listcard > div:nth-child(3) > div > h4').contains('defunkt');
        cy.get('#listcard > div:nth-child(6) > div > h4').contains('ezmobius');
        cy.get('#listcard > div:nth-child(9) > div > h4').contains('vanpelt');
        cy.get('#listcard > div:nth-child(13) > div > h4').contains('technoweenie');
        cy.get('#listcard > div:nth-child(16) > div > h4').contains('caged');
        cy.get('#listcard > div:nth-child(25) > div > h4').contains('kevwil');
        cy.get('#listcard > div:nth-child(31) > div > h4').contains('bmizerany'); 
      });

      it('click in user detail show user detail but not increase success counter', () => {
        cy.visit('http://localhost:8080/');
        cy.get('#listcard > div:nth-child(2) > div > a').click(); // esto es pinchar
        cy.get('h4').contains('mojombo'); // esto es comprobar que tiene resultado
        cy.get('.btn').click(); // ESTO ES VOLVER ATRAS
        cy.get('.success').contains('0'); // ESTO ES COMPROBAR QUE HA CRECIDO EL CONTADOR

      });

    it('when search a not existing username returns custom message and add a fail into counter', () => {
      cy.visit('http://localhost:8080/');
      cy.get('input').type("karina heras");   
      cy.get('button').click();   
      cy.get('h4').contains('Usuario no encontrado');
      cy.get('.btn').click();
      cy.get('.error').contains('1');
      
    });
    it('when search existing username returns custom message and add a success into counter', () => {
        cy.visit('http://localhost:8080/');
        cy.get('input').type("karinaheras");   
        cy.get('button').click();   
        cy.get('h4').contains('KarinaHeras');
        cy.get('.btn').click();
        cy.get('.success').contains('1');
        
      });
      
})
