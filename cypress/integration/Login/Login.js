import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import loginFormActions from '../../pageObjects/loginForm/actions';
import loginFormAssertion from '../../pageObjects/loginForm/assertions';

const loginActions=new loginFormActions(); 
const loginAssertion=new loginFormAssertion(); 
 

    Given ('A user in Sign in page',()=>{
      loginActions.visitLoginPage();
     }) 
    When ('He enters a valid Email in email field',()=>{
      loginActions.fillEmailInLoginForm('razanbalatiah96@gmail.com')
    })
    And('He enters a valid password in password field',()=>{
      loginActions.fillPasswordInLoginForm('123456789')
    })
    And('He clicks on sign in button',()=>{
      loginActions.submitLoginForm() 
    })
    Then('The user should be redirected to Home page',()=>{
         loginAssertion.TitleOfPage('Home — Conduit')
      })
    
    
 