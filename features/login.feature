Feature: Login
  @only
  Scenario: Successful login
    Given I am on the login page
    When I enter username 'Admin' and password 'admin123' and submit
    Then I should see the dashboard

  Scenario Outline: Login validation
    Given I am on the login page
    When I enter username <username> and password <password> and submit
    Then I should see Invalid credentials alert
    Examples:
      | username      | password          |
      | Admin         | 'InvalidPassword' |
      | 'InvalidUser' | 'admin123'        |

  Scenario Outline: Required fields
    Given I am on the login page
    When I enter username <username> and password <password> and submit
    Then I should see an validation message "Required"
    Examples:
      | username | password   |
      | Admin    | ''         |
      | ''       | 'admin123' |