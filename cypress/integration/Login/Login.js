import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import ArticleFormActions from '../../pageObjects/ArticleForm/actions';
import ArticleFormAssertion from '../../pageObjects/ArticleForm/assertions';

const articleFormActions=new ArticleFormActions(); 
const articleFormAssertion=new ArticleFormAssertion(); 
 

    Given ('A user in Sign in page',()=>{
      articleFormActions.visitLoginPage();
     }) 
    When ('He enters a valid Email in email field',()=>{
      articleFormActions.fillEmailInLoginForm('razanbalatiah96@gmail.com')
    })
    And('He enters a valid password in password field',()=>{
      articleFormActions.fillPasswordInLoginForm('123456789')
    })
    And('He clicks on sign in button',()=>{
      articleFormActions.submitLoginForm() 
    })
    Then('The user should be redirected to Home page',()=>{
        cy.wait(3000)
        articleFormAssertion.TitleOfPage('Home — Conduit')
      })
    
    
 