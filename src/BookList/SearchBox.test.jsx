import React from 'react';
import {render} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import SearchBox from './SearchBox';

describe('SearchBox', () => {
  it('renders input', () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    const {container} = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    userEvent.type(input, 'domain');

    expect(props.onSearch).toHaveBeenCalled();
  });

  it('trim empty strings', () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    const {container} = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    userEvent.type(input, '  ');

    expect(props.onSearch).not.toHaveBeenCalled();
  })
});

