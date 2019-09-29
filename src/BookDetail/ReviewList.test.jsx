import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  it('renders empty list', () => {
    const props = {
      reviews: []
    };

    const {container} = render(<ReviewList {...props}/>);
    const reviews = container.querySelector('[data-test="reviews-container"]');

    expect(reviews).toBeInTheDocument();
  });

  it('Render List', () => {
    const props = {
      reviews: [
        { name: 'Juntao', date: '2018/06/21', content: 'Excellent work, really impressive on the efforts you put'},
        { name: 'Abruzzi', date: '2018/06/22', content: 'What a great book'}
      ]
    };

    const {container} = render(<ReviewList {...props}/>);
    const reviews = container.querySelectorAll('[data-test="reviews-container"] .review');

    expect(reviews.length).toBe(2);

    expect(reviews[0].querySelector('.name').innerHTML).toEqual('Juntao');
    expect(reviews[0].querySelector('.date').innerHTML).toEqual('2018/06/21');
    expect(reviews[0].querySelector('.content').innerHTML).toEqual('Excellent work, really impressive on the efforts you put');
  })
});
