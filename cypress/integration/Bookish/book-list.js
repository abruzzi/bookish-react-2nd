import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  checkReview,
  cleanUpStubBooks,
  composeReview,
  feedStubBooks,
  gotoApp,
  gotoNthBookInTheList,
  performSearch
} from "../../helpers";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Then(`I can see {int} books`, (number) => {
  //
});

And(`there are`, table => {
  const actual = table.rows().map(x => x[0]);
  checkBookListWith(actual);
});