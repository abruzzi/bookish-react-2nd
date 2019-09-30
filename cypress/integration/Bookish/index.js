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

Given(`I am a bookish user`, () => {
  //
});

When(`I open the "list" page`, () => {
  gotoApp();
});

Then(`I can see the title {string} is showing`, (title) => {
  checkAppTitle();
});

Then(`I can see {int} books`, (number) => {
  //
});

And(`there are`, table => {
  const actual = table.rows().map(x => x[0]);
  checkBookListWith(actual);
});