@UserListPage
@AdminUI
@regression
Feature: AdminUI

@1
Scenario Outline: Logs in to Admin UI
    Given I open 'Login' page
        And I enter the '<Username>' as login in 'Login' input
        And I enter the '<Password>' as password in 'Password' input
        And I click 'Login' button
        And I wait the 'Title' to be displayed
    Then 'Users' 'Title' page is displayed

Examples:
    | Username        | Password        |
    | scherbv         | D1l9b2v01Wqwer  |


@2
Scenario: Existing questions are displayed on the Question Library page
    Given I go to 'QuestionLibrary' page
    Then Question table is shown
