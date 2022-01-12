const faker = require('faker')

describe('Create issue', () => {

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.datatype.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.datatype.words(5)
        }
    }

    beforeEach(() => {
        cy.login();
        cy.api_createProject(issue.project);
    });

    it('Successfully', () => {
        cy.gui_createIssue(issue)
        cy.get('.issue-details')
        .should('contain', issue.title)
        .and('contain', issue.description)
    });
});