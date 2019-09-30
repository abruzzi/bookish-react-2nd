import {feedStubBooks} from "../../helpers";
import {cleanUpStubBooks} from "../../helpers";

import {Before, After} from "cypress-cucumber-preprocessor/steps";

Before(() => {
  feedStubBooks();
});

After(() => {
  cleanUpStubBooks();
});