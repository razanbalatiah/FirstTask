import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
 import ArticleFormActions from '../../pageObjects/ArticleForm/actions';
import ArticleFormAssertion from '../../pageObjects/ArticleForm/assertions';

const articleFormActions=new ArticleFormActions();
const articleFormAssertion=new ArticleFormAssertion(); 

    beforeEach(()=>{
       articleFormActions.visitLoginPage()
       articleFormActions.fillEmailInLoginForm('razanbalatiah96@gmail.com')
       .fillPasswordInLoginForm('123456789')
       .submitLoginForm() 
       articleFormActions.openNewArticleTab()
    }) 

    Given('A user In Home page',()=>{
      articleFormAssertion.TitleOfPage('Home — Conduit')
    })
    When('He clicks on New article tab',()=>{
        articleFormActions.openNewArticleTab()
     })
    Then('New article tab will be opened',()=>{
       articleFormAssertion.TitleOfPage('Editor — Conduit')
    })
  
    Given('A user in New article form',()=>{
      cy.wait(1500)
         articleFormAssertion.TitleOfPage('Editor — Conduit')
     })
    When('He reviews fields in the form',()=>{
        cy.log('Reviews Elements in the form');
    })
    Then('He should find Article Title field in form with placholder "Article Title"',()=>{
        articleFormAssertion.visibilityOfTitle('Article Title')
    })

    Given('A user in New article form',()=>{
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    })
   When('He reviews fields in the form',()=>{
       cy.log('Reviews Elements in the form');
   })
   Then('He should find Description field in form with placholder "What\'s this article about?"',()=>{
       articleFormAssertion.visibilityOfDescribtion('What\'s this article about?')
   })

    Given('A user in New article form',()=>{
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    })
   When('He reviews fields in the form',()=>{
       cy.log('Reviews Elements in the form')
   })
   Then("He should find body field in form",()=>{
       articleFormAssertion.visibilityOfBody()
   })

    Given('A user in New article form',()=>{
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    })
    When('He reviews fields in the form',()=>{
        cy.log('Reviews Elements in the form');
    })
    Then('He should find Enter tags field in form with placholder "Enter tags"',()=>{
        articleFormAssertion.visibilityOfTags('Enter tags')
    }) 


        Given('A user in New article form',()=>{
          articleFormAssertion.TitleOfPage('Editor — Conduit')
        })
        When('He reviews elements in the form',()=>{
            cy.log('Reviews Elements in the form');
        })
        Then('He should find Publish Article button in form',()=>{
            articleFormAssertion.visibilityOfPublishBtn()
        }) 
              
      Given('A user in New article form',()=>{
        wait(3000)
        articleFormAssertion.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills all fields corrcetly",()=>{
        articleFormActions.fillArticalForm('Title','Desc  ','body  ','tag{enter}  ')
      }) 
      When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
      }) 
      Then('The article will be published in Home page',()=>{
        cy.log("published successfully")
      })

                  
      Given('A user in New article form',()=>{
        wait(3000)
        articleFormAssertion.TitleOfPage('Editor — Conduit')
      }) 
      And ("He didn't fill any field in the form",()=>{
        articleFormActions.fillArticalForm(' ','  ','  ','  ')
      }) 
      When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
      }) 
      Then('The Error message should be displayed',()=>{
        cy.wait(1500)
        
          articleFormAssertion.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
         "\n      body can't be blank\n    ","\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
      })

      Given('A user in New article form',()=>{
         articleFormAssertion.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills Title and description field only",()=>{
        articleFormActions.fillArticalForm(' Title ',' Desc ','  ','  ')

      }) 
      When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
      }) 
      Then('The Error message "body can\'t be blank" should be displayed',()=>{
        articleFormAssertion.SingleError("\n      body can't be blank\n    ")
      })

      Given('A user in New article form',()=>{
         articleFormAssertion.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills Title and body fields",()=>{
        articleFormActions.fillArticalForm(' Title ','  ','  body ','  ')

      }) 
      When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
      }) 
      Then('An error message will be displayed',()=>{
        cy.wait(1500)
        articleFormAssertion.errorMessages(["\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
      })
  
 
      Given('A user in New article form',()=>{
        articleFormAssertion.TitleOfPage('Editor — Conduit')
     }) 
     And ("He fills description and body fields",()=>{
      articleFormActions.fillArticalForm(' ',' desc ',' body ','  ')

     }) 
     When('He clicks on publish Article button',()=>{
       articleFormActions.publishArticleBtn()
     }) 
     Then('An error messages will be displayed',()=>{
        articleFormAssertion.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    "])
     })

   
     Given('A user in New article form',()=>{
      wait(3000)
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills tags field only",()=>{
      articleFormActions.fillArticalForm(' ','  ','  ',' tag{enter} ')

    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error Msg Will be displayed',()=>{
         articleFormAssertion.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
       "\n      body can't be blank\n    ","\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
    })


    Given('A user in New article form',()=>{
      wait(3000)
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills Title field only",()=>{
      articleFormActions.fillArticalForm('Title ','  ','  ','  ')

    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('error messages should be displayed',()=>{
         articleFormAssertion.errorMessages(["\n      body can't be blank\n    ","\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
    })

     
    Given('A user in New article form',()=>{
      wait(3000)
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills description field only",()=>{
      articleFormActions.fillArticalForm(' ',' desc ','  ','  ')

    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('error msg will be displayed',()=>{
         articleFormAssertion.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
       "\n      body can't be blank\n    "])
    })

    Given('A user in New article form',()=>{
      wait(3000)
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills body field only",()=>{
      articleFormActions.fillArticalForm(' ','  ',' body ','  ')

    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('An Err message will be displayed',()=>{
         articleFormAssertion.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
         "\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
    })

     
    
     