Feature: Case Creation

@prueba1
Scenario: Create and Edit a case
Given I selected a location
When I type "cvibanco" as username and  "1111" as password
    And I click the Sign In button
    And I click on "officer-dashboard"
    And I click on "cases-dashboard"
    And I create a new case
    And I open the case
Then the "case-name" was saved successfully
    And the "description" was saved successfully
    And the "event" was saved successfully
    And the "OfficerID" was saved successfully
    And the "PartnerID" was saved successfully
