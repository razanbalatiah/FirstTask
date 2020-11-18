Feature: open New Article tab


   # Background:
   # Given A user is already registered to conduit website

    Scenario: opening conduit Home page 
      Given A user in conduit Sign in page
      When He enters a valid Email in email field
      And He enters a valid password in password field
      And He clicks on sign in button 
      Then The user should be redirected to Home page

   #  Scenario: opening New article tab
   #  Given A user In Home page 
   #  When He clicks on New article tab 
   #  Then New article tab will be opened 
