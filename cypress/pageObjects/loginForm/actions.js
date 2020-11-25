class loginFormActions{
    visitLoginPage(){
        cy.visit('https://demo.productionready.io/#/login')
    }
    fillEmailInLoginForm(value){
        cy.get('[type="email"]').clear().type(value)
         return this 
    }
    fillPasswordInLoginForm(value){
       cy.get('[type="password"]').clear().type(value)
        return this 
    }
    submitLoginForm(){
        cy.get('[type="submit"]').click()
    }
    
   
}
export default loginFormActions;