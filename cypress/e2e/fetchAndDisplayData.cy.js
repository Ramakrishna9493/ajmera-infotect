describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.intercept(
        {
          method: 'GET',
          url: 'https://reqres.in/api/users',
        },
        {data:[
          {
            first_name: "Test",
            email: "test@test.com",
            last_name: "test"
          }
        ]
        }
      ).as('getData')
    })
  
    it('checks table present', () => {
        cy.wait("@getData")
        cy.get("tr").should("have.length", 2)
        cy.get("tr th").eq(1).should("have.text", "Id")
        cy.get("tr th").eq(2).should("have.text", "Name")
        cy.get("tr th").eq(3).should("have.text", "Email") 
    })
    it("On Add User Button click it opens form", () => {
      cy.get(".ant-btn").click()
      cy.get(".ant-modal-header").should("have.text", "Add User")
    })
})
  