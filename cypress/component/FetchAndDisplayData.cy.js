import { Provider } from "react-redux"
import User from "../../src/react/components/user/index"
import store from "../../src/redux/store/index"
describe('FetchAndDisplayData.cy.js', () => {
  beforeEach(() => {
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

  it('playground', () => {
    cy.mount(<Provider store={store}><User /></Provider>)  
    cy.get("tr").should("have.length", 2)
    cy.get("tr th").eq(1).should("have.text", "Id")
    cy.get("tr th").eq(2).should("have.text", "Name")
    cy.get("tr th").eq(3).should("have.text", "Email") 
  })
})