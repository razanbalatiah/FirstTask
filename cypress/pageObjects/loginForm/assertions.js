class loginFormAssertion{  
    TitleOfPage(value){
       cy.title().should('include',value)
    }
}
export default loginFormAssertion;