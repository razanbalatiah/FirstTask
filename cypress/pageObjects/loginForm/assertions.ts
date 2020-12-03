class loginFormAssertion{  
    TitleOfPage(value: string){
       cy.title().should('include',value)
    }
}
export default loginFormAssertion;