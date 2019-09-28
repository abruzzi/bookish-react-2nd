import React from 'react'
import {render} from '@testing-library/react'

import BookList from './BookList';

describe('BookList', () => {
  it('loading', () => {
    const props = {
      loading: true
    };
    const {container} = render(<BookList {...props} />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Loading');
  });
});