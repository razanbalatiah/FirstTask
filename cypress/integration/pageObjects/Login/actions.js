class Login {
  visit(){
    cy.visit('https://demo.productionready.io/#/login')
  }
  fillEmail(value){
    cy.get('[type="email"]').clear().type(value)
     return this 
  }
  fillPassword(value){
   cy.get('[type="password"]').clear().type(value)
    return this 
  }
  submit(){
    cy.get('[type="submit"]').click()
  }

}
export default Login 