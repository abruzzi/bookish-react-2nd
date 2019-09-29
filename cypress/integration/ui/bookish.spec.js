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

describe('Bookish application', () => {
  beforeEach(() => {
    feedStubBooks();
    gotoApp();
  });

  afterEach(() => {
    cleanUpStubBooks();
  });

  it('Visits the bookish', () => {
    checkAppTitle();
  });

  it('Shows a book list', () => {
    checkBookListWith(['Refactoring', 'Domain-driven design', 'Building Micro-service']);
  });

  it('Goes to detail page', () => {
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it('Search for a title', () => {
    checkBookListWith(['Refactoring', 'Domain-driven design', 'Building Micro-service']);
    performSearch('design');
    checkBookListWith(['Domain-driven design']);
  });

  it('Write a review for a book', () => {
    gotoNthBookInTheList(0);
    checkBookDetail();
    composeReview('Juntao Qiu', 'Excellent works!');
    checkReview();
  });

});