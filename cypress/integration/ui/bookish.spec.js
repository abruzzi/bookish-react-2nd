import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  cleanUpStubBooks,
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

    cy.get('input[name="name"]').type('Juntao Qiu');
    cy.get('textarea[name="content"]').type('Excellent works!');
    cy.get('button[name="submit"]').click();

    cy.get('div[data-test="reviews-container"] .review').should('have.length', 1);
  });

});