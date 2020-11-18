Feature: New Article Form

    Background:
    Given A user in New article tab 

    Scenario: Article Title field in form 
    Given A user in New article form 
    When He reviews fields in the form   
    Then He should find Article Title field in form
    And The placholder is "Article Title" for the field 

    Scenario: Description field in form 
    Given A user in New article form 
    When He reviews fields in the form   
    Then He should find Description field in form
    And The placholder is "What's this article about?" for the field 

    Scenario: Body field in form 
    Given A user in New article form 
    When He reviews fields in the form   
    Then He should find body field in form
    And The placholder is "Write your article (in markdown)" for the field
    
    Scenario: Enter tags field in form 
    Given A user in New article form 
    When He reviews fields in the form   
    Then He should find Enter tags field in form
    And The placholder is "Enter tags" for the field

    Scenario: Publish Article button in form 
    Given A user in New article form 
    When He reviews elements in the form   
    Then He should find Publish Article button in form
 
