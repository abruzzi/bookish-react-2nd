import React from 'react'
import {render} from '@testing-library/react'

import BookDetail from './BookDetail';

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring'
      }
    };

    const {container} = render(<BookDetail {...props} />);

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

    const {container} = render(<BookDetail {...props} />);

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

    const {container} = render(<BookDetail {...props} />);

    const reviews = container.querySelectorAll('[data-test="reviews-container"] .review');
    expect(reviews.length).toBe(1);
    expect(reviews[0].innerHTML).toEqual('Juntao');
  });

});