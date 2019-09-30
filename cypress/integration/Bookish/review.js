import {When, And, Then} from "cypress-cucumber-preprocessor/steps";
import {checkBookDetail, checkReview, composeReview, gotoNthBookInTheList} from "../../helpers";

When(`I open the book detail page for the first item`, () => {
  gotoNthBookInTheList(0);
});

And(`I add a review to that book`, table => {
  const reviews = table.hashes();
  const review = reviews[0];
  composeReview(review.name, review.content);
});

Then(`I can see it shows beneath the description section goes {string}`, (content) => {
  checkReview(content);
});