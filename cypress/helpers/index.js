import axios from "axios";

export const cleanUpStubBooks = () => {
  return axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err)
};

export const feedStubBooks = () => {
  const books = [
    {"name": "Refactoring", "id": 1},
    {"name": "Domain-driven design", "id": 2},
    {"name": "Building Micro-service", "id": 3}
  ];

  return books.map(item => axios.post('http://localhost:8080/books', item, {headers: {'Content-Type': 'application/json'}}))
};

export const gotoApp = () => {
  cy.visit('http://localhost:3000/');
}

export const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains('Bookish');
}

export const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should('exist');
  cy.get('div.book-item').should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map(x => x.querySelector('h2').innerHTML);
    expect(titles).to.deep.equal(expectation)
  })
}

export const gotoNthBookInTheList = (nth) => {
  cy.get('div.book-item').contains('View Details').eq(nth).click();
  // cy.url().should('include', `/books/${nth + 1}`);
}

export const checkBookDetail = () => {
  cy.get('h2.book-title').contains('Refactoring');
}

export const performSearch = (term) => {
  cy.get('[data-test="search"] input').type(term);
}

export const composeReview = (name, content) => {
  cy.get('input[name="name"]').type(name);
  cy.get('textarea[name="content"]').type(content);
  cy.get('button[name="submit"]').click();
};

export const checkReview = () => {
  cy.get('div[data-test="reviews-container"] .review').should('have.length', 1);
}