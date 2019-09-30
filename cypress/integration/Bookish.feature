Feature: Book List
  As a reader
  I want to see books in the trend
  So I can learn what to read next

  Scenario: Heading
    Given I am a bookish user
    When I open the list page
    Then I can see the title "Bookish" is showing

  Scenario: Book List
    Given I am a bookish user
    When I open the list page
    And there are
      | name                   |
      | Refactoring            |
      | Domain-driven design   |
      | Building Micro-service |

  Scenario: Search by keyword
    Given I am a bookish user
    When I open the list page
    And I typed "design" to perform a search
    Then I should see "Domain-driven design" is matched

  Scenario: Write a review
    Given I am a bookish user
    When I open the book detail page for the first item
    And I add a review to that book
      | name       | content          |
      | Juntao Qiu | Excellent works! |
    Then I can see it shows beneath the description section goes "Excellent works!"