@UserListPage
@AdminUI
@regression
Feature: AdminUI

@1
Scenario:Logs in to Admin UI
    Given I open 'Login' page
        And I login to AdminUI
    Then 'User List' title page is displayed

@2
Scenario: Existing questions are displayed on the Question Library page
    Given I go to 'Question Library' page
    Then Question table is shown