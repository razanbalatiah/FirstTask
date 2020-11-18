import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import ArticleFormActions from '../../pageObjects/ArticleForm/actions';
import ArticleFormAssertion from '../../pageObjects/ArticleForm/assertions';

const Action_obj=new ArticleFormActions(); 
const Assert_obj=new ArticleFormAssertion(); 
 

    Given ('A user in Sign in page',()=>{
      Action_obj.visitLoginPage();
     }) 
    When ('He enters a valid Email in email field',()=>{
      Action_obj.fillEmailInLoginForm('razanbalatiah96@gmail.com')
    })
    And('He enters a valid password in password field',()=>{
      Action_obj.fillPasswordInLoginForm('123456789')
    })
    And('He clicks on sign in button',()=>{
      Action_obj.submitLoginForm() 
    })
    Then('The user should be redirected to Home page',()=>{
        cy.wait(3000)
        Assert_obj.TitleOfPage('Home — Conduit')
      })
    
    
 