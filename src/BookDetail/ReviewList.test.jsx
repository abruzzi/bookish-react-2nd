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

});
