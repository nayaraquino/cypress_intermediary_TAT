const faker = require('faker')

describe('Create Project', () => {
    beforeEach(() => cy.login())

    it('Successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.datatype.words(5)
        }

        cy.gui_createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be_visible')
    });
});