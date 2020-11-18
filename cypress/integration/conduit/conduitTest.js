import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import Login from '../pageObjects/Login/actions';
import Article from '../pageObjects/ArticlePage';
import ArticleForm from '../pageObjects/ArticleForm';
import FillForm from '../pageObjects/FillForm';
const login=new Login(); 
const article=new Article();
const articleForm=new ArticleForm();  
const field=new FillForm();


    Given (`A user in conduit Sign in page`,()=>{
      login.visit()
     /// cy.visit('https://demo.productionready.io/#/login')
    }) 
    When (`He enters a valid Email in email field`,()=>{
      login.fillEmail('razanbalatiah96@gmail.com')
    })
    And(`He enters a valid password in password field`,()=>{
      login.fillPassword('123456789')
    })
    And(`He clicks on sign in button`,()=>{
      login.submit() 
    })
    Then(`The user should be redirected to Home page`,()=>{
         cy.title().should('include','Home - Conduit')
    })
    
   
    // it('Fill all fields in the form ',()=>{
    //   field.fillTitle('This is title')
    //   .fillDesc('This is description')
    //   .fillBody('This is body')
    //   .fillTags('This is tags{enter}')
    //   .publishArticleBtn()
       
    // })
     
    // it('Keep all fields empty',()=>{
    //    field.fillTitle(' ')
    //         .fillDesc(' ')
    //         .fillBody(' ')
    //         .fillTags(' ')
    //         .publishArticleBtn() 
            
    // })

      
    // it('fill title field only',()=>{
    //    field.fillTitle('This is Title')
    //    .fillDesc(' ')
    //    .fillBody(' ')
    //    .fillTags(' ')
    //    .publishArticleBtn() 
       
    // })
     
    // it('fill title and description field only',()=>{
    //    field.fillTitle('This is Title')
    //         .fillDesc('This is description')
    //         .fillBody(' ')
    //         .fillTags(' ')
    //         .publishArticleBtn() 
       
    // })
   
 