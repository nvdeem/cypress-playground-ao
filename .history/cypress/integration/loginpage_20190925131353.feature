 Feature: Log in to AO
  In order to access my account
  As an end user
  I want to be able to log in
  So that I can view my account

  @focus
  Scenario: Log in with registered account
    Given I am on the log in page
    And I enter a registered account email and password
    When I click sign in
    Then I will be logged in to my account