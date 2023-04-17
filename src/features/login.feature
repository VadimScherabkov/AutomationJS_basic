@LoginPage
@regression
Feature: LoginPage

@1
Scenario: Opens Login Page and ensures login controls presence
    Given I open 'login' page
    Then Login title should 'be equal to' 'Please login'
        And Login input is displayed
        And Password input is displayed
        And 'Login' button is displayed

@2
Scenario: Validates mandatory fields
    Given I click 'Login' button
    Then Login validation message is shown
        And Password validation message is shown

@3
Scenario: Entries the incorrect credentials
    Given I enter the incorrect '<Username>' as login
        And I enter the incorrect '<Password>' as password
        And I click 'Login' button
    Then Validation message is shown

Examples:
    | Username        | Password        |
    | invalidLogin    | invalidPassword |
    | 12345           | 12345           |
    | scherbv@msk.org | Password1!      |
