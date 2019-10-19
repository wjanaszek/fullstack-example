import { getGreeting } from '../support/app.po';

describe('ride-or-die', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ride-or-die!');
  });
});
