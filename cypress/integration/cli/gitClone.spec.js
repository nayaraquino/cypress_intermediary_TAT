const faker = require('faker')

describe('git clone', () => {
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.datatype.words(5)
    }

    beforeEach(() => cy.api_createProject(project))

    it('Successfully', () => {
        cy.cloneViaSSH(project)
        cy.readFile(`temp/${project.name}/README.md`)
            .should('contain', `# ${project.name}`)
            .and('contain', project.description)
    })
})
