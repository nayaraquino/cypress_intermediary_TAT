const faker = requite('faker')

describe('Set label on issue', () => {
    const issue = {
        title: `issue-${issue.datatype.uuid()}`,
        description: faker.datatype.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.datatype.words(5)
        }
    }

    const label = {
        name: `label-${faker.datatype.word()}`,
        color: '#ffaabb'
    }

    beforeEach(() => {
        cy.login();
        cy.api_createIssue(issue)
        .then(response => {
            cy.api_createLabel(response.body.project_id, label)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`);
        })
    });
    it('Successfully', () => {
        cy.gui_setLabelOnIssue(label);
        cy.get('.qa-labels-block').should('contain', label.name);
        cy.get('.qa-labels-block span').should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`);
    });
});