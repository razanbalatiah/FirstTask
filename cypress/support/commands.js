Cypress.Commands.add("login",()=> {
   if(window.localStorage.getItem('jwtToken')) {
     return window.localStorage.getItem('jwtToken')
    }
   return cy.request({
        method:'POST',
        url:'https://conduit.productionready.io/api/users/login',
        body:{
            user:{
                email:"razanbalatiah96@gmail.com",
                password:"123456789"
            }
        }
    }).then((resp)=>{
         window.localStorage.setItem('jwtToken',resp.body.user.token)
          
    })
})

Cypress.Commands.add("logout",()=> {
    cy.clearLocalStorage()
})
 
 
