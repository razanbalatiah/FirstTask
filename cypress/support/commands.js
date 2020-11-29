// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add("login",()=> {
    cy.request({
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

 Cypress.Commands.add("fillArticle",()=> {
    articleFormActions.openNewArticleTab()
    articleFormActions.fillArticalForm('Title','Desc  ','body  ','tag{enter}  ')
    articleFormActions.publishArticleBtn()
    articleFormAssertion.checkVisibiltyOfArticle()



 })

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })


// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

 