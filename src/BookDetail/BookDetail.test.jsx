import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import BookDetail from './BookDetail';

import store from '../store';
import {Provider} from "react-redux";

const renderWithProvider = (component) => {
  return {...render(<Provider store={store}>
        {component}
    </Provider>)}
};

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring'
      }
    };

    const {container} = renderWithProvider(<BookDetail {...props} />);

    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: 'Martin Fowler’s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.'
      }
    };

    const {container} = renderWithProvider(<BookDetail {...props} />);

    const title = container.querySelector('p.book-description');
    expect(title.innerHTML).toEqual(props.book.description);
  });

  it('renders reviews', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: 'Martin Fowler’s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.',
        reviews: [
          { name: 'Juntao', date: '2018/06/21', content: 'Excellent work, really impressive on the efforts you put'}
        ]
      }
    };

    const {container} = renderWithProvider(<BookDetail {...props} />);

    const reviews = container.querySelectorAll('[data-test="reviews-container"] .review');
    expect(reviews.length).toBe(1);
    expect(reviews[0].innerHTML).toEqual('Juntao');
  });

  it('renders review form', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: 'Martin Fowler’s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.'
      }
    };

    const {container} = renderWithProvider(<BookDetail {...props} />);

    const form = container.querySelector('form');
    const nameInput = container.querySelector('input[name="name"]');
    const contentTextArea = container.querySelector('textarea[name="content"]');
    const submitButton = container.querySelector('button[name="submit"]');

    expect(form).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(contentTextArea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});