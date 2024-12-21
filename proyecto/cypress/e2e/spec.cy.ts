describe('GF Rent App', () => {
  beforeEach(() => {
    cy.visit('/login'); // Visita la página de inicio de sesión
  });

  it('should display the login page', () => {
    cy.contains('Iniciar Sesión'); // Verifica que el título de la página sea "Iniciar Sesión"
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('#username').type('emilys'); // Cambia esto por un usuario válido
    cy.get('#password').type('emilyspass'); // Cambia esto por una contraseña válida
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/user-profile'); // Verifica que se redirija al perfil del usuario
  });

  it('should display a 404 page for unknown routes', () => {
    cy.visit('/unknown-route');
    cy.contains('404 - Página No Encontrada'); // Verifica que se muestre el mensaje de error
  });
});