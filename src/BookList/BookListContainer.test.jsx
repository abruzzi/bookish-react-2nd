import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import BookListContainer from "./BookListContainer";
import {Provider} from "react-redux";

import {MemoryRouter as Router} from 'react-router-dom';
import store from '../store';

const renderWithProvider = (component) => {
  return {...render(<Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>)}
};

describe('BookListContainer', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.resetHistory();
  });

  it('renders', async () => {
    mock.onGet('http://localhost:8080/books?q=').reply(200, [
      {"name": "Refactoring", "id": 1},
      {"name": "Acceptance tests driven development with React", "id": 2},
    ]);

    const {findByText} = renderWithProvider(<BookListContainer/>);

    const book1 = await findByText('Refactoring');
    const book2 = await findByText('Acceptance tests driven development with React');

    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
  })
});

