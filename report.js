var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/cucumber-json/Bookish.cucumber.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);