Feature: Search Functionality on Zero Bank Website

  Scenario: I search for valid data
    Given I am on the Zero Bank homepage
    When I enter "online" in the search box and click the search button
    Then the search results page should display results relevant to "Zero - Online Statements"
