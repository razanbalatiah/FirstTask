import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
 import ArticleFormActions from '../../pageObjects/ArticleForm/actions';
import ArticleFormAssertion from '../../pageObjects/ArticleForm/assertions';

const Action_obj=new ArticleFormActions(); 
const Assert_obj=new ArticleFormAssertion(); 

    beforeEach(()=>{
       Action_obj.visitLoginPage()
       Action_obj.fillEmailInLoginForm('razanbalatiah96@gmail.com')
       .fillPasswordInLoginForm('123456789')
       .submitLoginForm() 
       Action_obj.openNewArticleTab()
    }) 

    Given('A user In Home page',()=>{
      Assert_obj.TitleOfPage('Home — Conduit')
    })
    When('He clicks on New article tab',()=>{
        Action_obj.openNewArticleTab()
     })
    Then('New article tab will be opened',()=>{
       Assert_obj.TitleOfPage('Editor — Conduit')
    })
  
    Given('A user in New article form',()=>{
      cy.wait(1500)
         Assert_obj.TitleOfPage('Editor — Conduit')
     })
    When('He reviews fields in the form',()=>{
        cy.log('Reviews Elements in the form');
    })
    Then('He should find Article Title field in form with placholder "Article Title"',()=>{
        Assert_obj.visibilityOfTitle('Article Title')
    })

    Given('A user in New article form',()=>{
      Assert_obj.TitleOfPage('Editor — Conduit')
    })
   When('He reviews fields in the form',()=>{
       cy.log('Reviews Elements in the form');
   })
   Then('He should find Description field in form with placholder "What\'s this article about?"',()=>{
       Assert_obj.visibilityOfDescribtion('What\'s this article about?')
   })

    Given('A user in New article form',()=>{
      Assert_obj.TitleOfPage('Editor — Conduit')
    })
   When('He reviews fields in the form',()=>{
       cy.log('Reviews Elements in the form')
   })
   Then("He should find body field in form",()=>{
       Assert_obj.visibilityOfBody()
   })

    Given('A user in New article form',()=>{
      Assert_obj.TitleOfPage('Editor — Conduit')
    })
    When('He reviews fields in the form',()=>{
        cy.log('Reviews Elements in the form');
    })
    Then('He should find Enter tags field in form with placholder "Enter tags"',()=>{
        Assert_obj.visibilityOfTags('Enter tags')
    }) 


  Given('A user in New article form',()=>{
    Assert_obj.TitleOfPage('Editor — Conduit')
  })
  When('He reviews elements in the form',()=>{
      cy.log('Reviews Elements in the form');
  })
  Then('He should find Publish Article button in form',()=>{
      Assert_obj.visibilityOfPublishBtn()
  }) 

  Given('A user in New article form',()=>{
    Assert_obj.TitleOfPage('Editor — Conduit')
  })
      When('He enters a correct Title as title',()=>{
        Action_obj.fillTitleInArticleForm('This is title')
      }) 
      And('He enters a correct description as description',()=>{
        Action_obj.fillDescInArticleForm('This is description')
      }) 
      And('He enters a correct body as body',()=>{
        Action_obj.fillBodyInArticleForm('This is body')
      }) 
      And('He enters a correct tags as tags',()=>{
         Action_obj.fillTagsInArticleForm('This is tag{enter}')
      }) 
      And('He clicks on publish Article button',()=>{
        Action_obj.publishArticleBtn()
      })
      Then('The article will be published in Home page',()=>{
        cy.log('Successfull Published')
      }) 

                  
      Given('A user in New article form',()=>{
        wait(3000)
        Assert_obj.TitleOfPage('Editor — Conduit')
      }) 
      And ("He didn't fill any field in the form",()=>{
        Action_obj.fillTitleInArticleForm(' ')
        Action_obj.fillDescInArticleForm(' ')
        Action_obj.fillBodyInArticleForm(' ')
        Action_obj.fillTagsInArticleForm(' ')
      }) 
      When('He clicks on publich Article button',()=>{
        Action_obj.publishArticleBtn()
      }) 
      Then('The Error message should be displayed',()=>{
        cy.wait(1500)
        
          Assert_obj.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
         "\n      body can't be blank\n    ","\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
      })

      Given('A user in New article form',()=>{
         Assert_obj.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills Title and description field only",()=>{
        Action_obj.fillTitleInArticleForm('TTT')
        Action_obj.fillDescInArticleForm('Description')
        Action_obj.fillBodyInArticleForm(' ')
        Action_obj.fillTagsInArticleForm(' ')
      }) 
      When('He clicks on publich Article button',()=>{
        Action_obj.publishArticleBtn()
      }) 
      Then('The Error message "body can\'t be blank" should be displayed',()=>{
        Assert_obj.SingleError("\n      body can't be blank\n    ")
      })

      Given('A user in New article form',()=>{
         Assert_obj.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills Title and body fields",()=>{
        Action_obj.fillTitleInArticleForm('Title')
        Action_obj.fillDescInArticleForm(' ')
        Action_obj.fillBodyInArticleForm('Body')
        Action_obj.fillTagsInArticleForm(' ')
      }) 
      When('He clicks on publich Article button',()=>{
        Action_obj.publishArticleBtn()
      }) 
      Then('An error message will be displayed',()=>{
        cy.wait(1500)
        Assert_obj.errorMessages(["\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
      })
  
 
      Given('A user in New article form',()=>{
        Assert_obj.TitleOfPage('Editor — Conduit')
     }) 
     And ("He fills description and body fields",()=>{
       Action_obj.fillTitleInArticleForm(' ')
       Action_obj.fillDescInArticleForm('Description')
       Action_obj.fillBodyInArticleForm('Body')
       Action_obj.fillTagsInArticleForm(' ')
     }) 
     When('He clicks on publich Article button',()=>{
       Action_obj.publishArticleBtn()
     }) 
     Then('An error messages will be displayed',()=>{
        Assert_obj.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    "])
     })

   
     Given('A user in New article form',()=>{
      wait(3000)
      Assert_obj.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills tags field only",()=>{
      Action_obj.fillTitleInArticleForm(' ')
      Action_obj.fillDescInArticleForm(' ')
      Action_obj.fillBodyInArticleForm(' ')
      Action_obj.fillTagsInArticleForm('This is Tags{enter}')
    }) 
    When('He clicks on publich Article button',()=>{
      Action_obj.publishArticleBtn()
    }) 
    Then('Error Msg Will be displayed',()=>{
         Assert_obj.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
       "\n      body can't be blank\n    ","\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
    })


    Given('A user in New article form',()=>{
      wait(3000)
      Assert_obj.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills Title field only",()=>{
      Action_obj.fillTitleInArticleForm('This is Title')
      Action_obj.fillDescInArticleForm(' ')
      Action_obj.fillBodyInArticleForm(' ')
      Action_obj.fillTagsInArticleForm(' ')
    }) 
    When('He clicks on publich Article button',()=>{
      Action_obj.publishArticleBtn()
    }) 
    Then('error messages should be displayed',()=>{
         Assert_obj.errorMessages(["\n      body can't be blank\n    ","\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
    })

     
    Given('A user in New article form',()=>{
      wait(3000)
      Assert_obj.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills description field only",()=>{
      Action_obj.fillTitleInArticleForm(' ')
      Action_obj.fillDescInArticleForm('This is description')
      Action_obj.fillBodyInArticleForm(' ')
      Action_obj.fillTagsInArticleForm(' ')
    }) 
    When('He clicks on publich Article button',()=>{
      Action_obj.publishArticleBtn()
    }) 
    Then('error msg will be displayed',()=>{
         Assert_obj.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
       "\n      body can't be blank\n    "])
    })

    Given('A user in New article form',()=>{
      wait(3000)
      Assert_obj.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills body field only",()=>{
      Action_obj.fillTitleInArticleForm(' ')
      Action_obj.fillDescInArticleForm(' ')
      Action_obj.fillBodyInArticleForm('This is body')
      Action_obj.fillTagsInArticleForm(' ')
    }) 
    When('He clicks on publich Article button',()=>{
      Action_obj.publishArticleBtn()
    }) 
    Then('An Err message will be displayed',()=>{
         Assert_obj.errorMessages([ "\n      title can't be blank\n    ","\n      title is too short (minimum is 1 character)\n    ",
         "\n      description can't be blank\n    ","\n      description is too short (minimum is 1 character)\n    "])
    })

     
    
     