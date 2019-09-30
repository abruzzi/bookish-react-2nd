import {checkBookListWith} from "../../helpers";

import {And, Then} from "cypress-cucumber-preprocessor/steps";

Then(`I can see {int} books`, (number) => {
  //
});

And(`there are a book list`, table => {
  const actual = table.rows().map(x => x[0]);
  checkBookListWith(actual);
});