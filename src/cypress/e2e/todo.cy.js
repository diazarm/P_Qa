/// <reference types="cypress" />

describe('ToDo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('agrega una tarea', () => {
    cy.get('[data-testid="task-input"]').type('Aprender Cypress');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('Aprender Cypress').should('exist');
  });

  it('marca una tarea como completada', () => {
    cy.get('[data-testid="task-input"]').type('Tarea completa');
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="task-0"]').click().should('have.css', 'text-decoration')
  });

  it('elimina una tarea', () => {
    cy.get('[data-testid="task-input"]').type('Eliminarme');
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="delete-0"]').click();
    cy.contains('Eliminarme').should('not.exist');
  });
});
