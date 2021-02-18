/// <reference types="cypress"/>

context('Anticipation calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  }); 

  it('should have correct labels', () => {
    cy.get('h1').should('contain', 'Simule sua Antecipação');
    cy.get('h2').should('contain', 'Você Receberá:');
    cy.get('label').should('contain', 'Informe o valor da venda');
    cy.get('label').should('contain', 'Em quantas parcelas');
    cy.get('span').should('contain', 'Máximo de 12 parcelas');
    cy.get('label').should('contain', 'Informe o percentual de MDR');
  });

  it('should show anticipation result after 3 inputs have value', () => {

    cy.intercept('POST', '**front-test.herokuapp.com', {
      fixture: 'result'
    }).as('fetchCalculator');

    cy.get('input[name="amount"]').type('300');
    cy.get('input[name="installments"]').type('10');
    cy.get('input[name="mdr"]').type('2');

    cy.get('[data-testid="loading"]');

    cy.wait('@fetchCalculator');

    cy.fixture('result.json').then((json) => {
      cy.get('[data-testid="currency-info"]').contains(`Amanhã: R$ ${json['1']}`);
      cy.get('[data-testid="currency-info"]').contains(`Em 15 dias: R$ ${json['15']}`);
      cy.get('[data-testid="currency-info"]').contains(`Em 30 dias: R$ ${json['30']}`);
      cy.get('[data-testid="currency-info"]').contains(`Em 90 dias: R$ ${json['90']}`);
    });

    cy.log('clear results if one of 3 inputs is empty');
    cy.get('input[name="mdr"]').clear();
    cy.get('[data-testid="currency-info"]').should('not.exist');
  });
});
