import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import BookDetailsContainer from "./BookDetailsContainer";
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

describe('BookDetailsContainer', () => {
  it('renders', async () => {
    const props = {
      match: {
        params: {
          id: 2
        }
      }
    };
    const mock = new MockAdapter(axios);
    mock.onGet('http://localhost:8080/books/2').reply(200, {
      "name": "Acceptance tests driven development with React", "id": 2
    });

    const {findByText} = renderWithProvider(<BookDetailsContainer {...props} />);

    const book = await findByText('Acceptance tests driven development with React');
    expect(book).toBeInTheDocument();
  })
});
