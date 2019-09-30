import {checkBookListWith, performSearch} from "../../helpers";

import {And, Then} from "cypress-cucumber-preprocessor/steps";

And(`I typed {string} to perform a search`, (term) => {
  performSearch(term);
});

Then(`I should see {string} is matched`, (book) => {
  checkBookListWith([book]);
});