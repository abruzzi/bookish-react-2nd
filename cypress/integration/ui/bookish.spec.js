import axios from "axios";

const cleanUpStubBooks = () => {
  return axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err)
};

const feedStubBooks = () => {
  const books = [
    {"name": "Refactoring", "id": 1},
    {"name": "Domain-driven design", "id": 2},
    {"name": "Building Micro-service", "id": 3}
  ];

  return books.map(item => axios.post('http://localhost:8080/books', item, {headers: { 'Content-Type': 'application/json' }}))
};

const gotoApp = () => {
  cy.visit('http://localhost:3000/');
}

const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains('Bookish');
}

const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should('exist');
  cy.get('div.book-item').should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map(x => x.querySelector('h2').innerHTML);
    expect(titles).to.deep.equal(expectation)
  })
}

const checkBookList = () => {
  checkBookListWith(['Refactoring', 'Domain-driven design', 'Building Micro-service']);
}

const gotoNthBookInTheList = (nth) => {
  cy.get('div.book-item').contains('View Details').eq(nth).click();
  cy.url().should('include', `/books/${nth+1}`);
}

const checkBookDetail = () => {
  cy.get('h2.book-title').contains('Refactoring');
}

const performSearch = (term) => {
  cy.get('[data-test="search"] input').type(term);
}

const checkSearchedResult = () => {
  checkBookListWith(['Domain-driven design'])
}

describe('Bookish application', () => {
  beforeEach(() => {
    feedStubBooks();
  });

  afterEach(() => {
    cleanUpStubBooks();
  });

  it('Visits the bookish', () => {
    gotoApp();
    checkAppTitle();
  });

  it('Shows a book list', () => {
    gotoApp();
    checkBookList();
  });

  it('Goes to detail page', () => {
    gotoApp();
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it('Search for a title', () => {
    gotoApp();
    checkBookList();
    performSearch('design');
    checkSearchedResult();
  });

});