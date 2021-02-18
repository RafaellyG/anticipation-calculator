/// <reference types="cypress"/>
import { errors } from '../../src/api/errorHandling';

context('Calculator rror handling', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should handle 500 error and clear results', () => {

    cy.intercept({
      method: 'POST',
      url: '**front-test.herokuapp.com'
    }, {
      statusCode: 500,
    }).as('fetchCalculator');

    cy.get('input[name="amount"]').type('300');
    cy.get('input[name="installments"]').type('10');
    cy.get('input[name="mdr"]').type('2');

    cy.wait('@fetchCalculator');

    cy.get('[data-testid="error-message"]').contains(errors[500]);
  });

  it('should handle 408 timeout error and clear results', () => {

    cy.intercept({
      method: 'POST',
      url: '**front-test.herokuapp.com'
    }, {
      statusCode: 408,
    }).as('fetchCalculator');

    cy.get('input[name="amount"]').type('300');
    cy.get('input[name="installments"]').type('10');
    cy.get('input[name="mdr"]').type('2');

    cy.wait('@fetchCalculator');

    cy.get('[data-testid="error-message"]').contains(errors[408]);
    cy.get('[data-testid="currency-info"]').should('not.exist');
  });

  it('should handle 400 bad request error and clear results', () => {

    cy.intercept({
      method: 'POST',
      url: '**front-test.herokuapp.com'
    }, {
      statusCode: 400,
    }).as('fetchCalculator');

    cy.get('input[name="amount"]').type('300');
    cy.get('input[name="installments"]').type('10');
    cy.get('input[name="mdr"]').type('2');

    cy.wait('@fetchCalculator');

    cy.get('[data-testid="error-message"]').contains(errors[400]);
    cy.get('[data-testid="currency-info"]').should('not.exist');
  });

  it('should handle offline user error and clear results', () => {

    cy.intercept({
      method: 'POST',
      url: '**front-test.herokuapp.com'
    }, {
      forceNetworkError: true,
    }).as('fetchCalculator');

    cy.get('input[name="amount"]').type('300');
    cy.get('input[name="installments"]').type('10');
    cy.get('input[name="mdr"]').type('2');

    cy.wait('@fetchCalculator');
    cy.get('[data-testid="error-message"]').contains(errors.internet);
    cy.get('[data-testid="currency-info"]').should('not.exist');
  });

  it('should handle generic error and clear results', () => {

    cy.intercept({
      method: 'POST',
      url: '**front-test.herokuapp.com'
    }, {
      statusCode: 402,
    }).as('fetchCalculator');

    cy.get('input[name="amount"]').type('300');
    cy.get('input[name="installments"]').type('10');
    cy.get('input[name="mdr"]').type('2');

    cy.wait('@fetchCalculator');

    cy.get('[data-testid="error-message"]').contains(errors.generic);
    cy.get('[data-testid="currency-info"]').should('not.exist');
  });
});
