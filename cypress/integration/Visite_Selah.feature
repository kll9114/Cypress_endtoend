Feature: Articles availability
  
  Scenario: Check articles availability 
    Given I get into Selah Home page
    When I click on the link article
    Then check results

  Scenario: Navigate to an article content 
    Given I get into Selah Home page
    When I click on the link article
    Then check results
    Then Access to the first article
