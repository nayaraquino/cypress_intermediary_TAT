const faker = require('faker')

describe('Create issue', () => {
    it('Successfully', () => {
        const issue = {
            title: `issue-${faker.datatype.uuid()}`,
            description: faker.datatype.words(3),
            project: {
                name: `project-${faker.datatype.uuid()}`,
                description: faker.datatype.words(5)
            }
        }

        cy.api_createIssue(issue)
        .then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(issue.name)
            expect(response.body.description).to.equal(issue.description)
        })
    });
});