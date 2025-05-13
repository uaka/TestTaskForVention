Feature: Login
  @only
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should see the dashboard

  Scenario: Login with invalid username
    Given I am on the login page
    When I enter username "InvalidUser"
    And I enter password "admin123"
    And I click the login button
    Then I should see Invalid credentials alert

  Scenario: Login with invalid password
    Given I am on the login page
    When I enter username "Admin"
    And I enter password "InvalidPassword"
    And I click the login button
    Then I should see Invalid credentials alert

  Scenario: Login with empty username
    Given I am on the login page
    When I enter username ""
    And I enter password "admin123"
    And I click the login button
    Then I should see an validation message "Required"

  Scenario: Login with empty password
    Given I am on the login page
    When I enter username "Admin"
    And I enter password ""
    And I click the login button
    Then I should see an validation message "Required"
