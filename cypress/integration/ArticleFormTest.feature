Feature:  ArticlForm

  #  Scenario: opening New article tab
  #     Given A user In Home page 
  #     When He clicks on New article tab 
  #     Then New article tab will be opened 

  #   Scenario: Article fields in form 
  #     When A user visits the article page   
  #     Then The fields of the form should be displayed   

    Scenario: Fill all fields in the form 
      Given A user in New article form 
      And He fills all fields corrcetly 
      When He clicks on publish Article button
      Then The article will be published in Article page


    Scenario: Delete An Article 
      Given A user in New article form 
      And He fills all fields corrcetly 
      When He clicks on publish Article button
      Then The article will be published in Article page 
      When He clicks on Delete Article button
      Then The article will be removed from Article page

    Scenario: Edit An Article 
      Given A user in New article form 
      And He fills all fields corrcetly 
      When He clicks on publish Article button
      Then The article will be published in Article page
      When He clicks on Edit Article button
      And He Edit any field in the editor page  
      Then The article will be updated



    # Scenario: Keep all fields blank  
    #   Given A user in New article form 
    #   And He didn't fill any field in the form 
    #   When He clicks on publish Article button 
    #   Then Error message should appear "title can't be blank" 
    #   And Error message should appear "title is too short (minimum is 1 character)"
    #   And Error message should appear "description can't be blank" 
    #   And Error message should appear "description is too short (minimum is 1 character)"
    #   And Error message should appear "body can't be blank" 


    # Scenario: Fill Title and description fields only in the form 
    #   Given A user in New article form 
    #   When He fills Title and description field only  
    #   And He clicks on publish Article button 
    #   Then Error message should appear "body can't be blank"
     
    # Scenario: Fill Title field only in the form 
    #   Given A user in New article form 
    #   When He fills Title field only  
    #   And He clicks on publish Article button 
    #   Then Error message should appear "description can't be blank" 
    #   And Error message should appear "description is too short (minimum is 1 character)"
    #   And Error message should appear "body can't be blank"  
      
    # Scenario: Fill description field only in the form 
    #   Given A user in New article form 
    #   When He fills description field only  
    #   And He clicks on publish Article button 
    #   Then Error message should appear "title can't be blank" 
    #   And Error message should appear "title is too short (minimum is 1 character)"
    #   And Error message should appear "body can't be blank" 

    # Scenario: Fill body field only in the form 
    #   Given A user in New article form 
    #   When He fills body field only  
    #   And He clicks on publish Article button 
    #   Then Error message should appear "title can't be blank" 
    #   And Error message should appear "title is too short (minimum is 1 character)"
    #   And Error message should appear "description can't be blank" 
    #   And Error message should appear "description is too short (minimum is 1 character)"
    
 
    #  Scenario: Fill Title and body fields only in the form 
    #   Given A user in New article form 
    #   When He fills Title and body fields 
    #   And He clicks on publish Article button 
    #   Then Error message should appear "description can't be blank" 
    #   And Error message should appear "description is too short (minimum is 1 character)"
 
 
    #  Scenario: Fill description and body fields only in the form 
    #   Given A user in New article form 
    #   When He fills description and body fields  
    #   And He clicks on publish Article button 
    #   Then Error message should appear "title can't be blank" 
    #   And Error message should appear "title is too short (minimum is 1 character)"
     

    # Scenario: Fill tags only in the form 
    #  Given A user in New article form 
    #   When He fills tags field only  
    #   And He clicks on publish Article button 
    #   Then Error message should appear "title can't be blank" 
    #   And Error message should appear "title is too short (minimum is 1 character)"
    #   And Error message should appear "description can't be blank" 
    #   And Error message should appear "description is too short (minimum is 1 character)"
    #   And Error message should appear "body can't be blank" 
 


