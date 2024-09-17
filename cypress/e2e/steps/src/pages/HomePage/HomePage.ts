export default class HomePage {
    
    dashboardValidation(): void {
        cy.get('body').should('be.visible');
   }
}