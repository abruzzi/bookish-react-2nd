import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Review from "./Review";
import userEvent from "@testing-library/user-event";

describe('Review', () => {
  it('renders', () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressive on the efforts you put'
      },
    };

    const {container} = render(<Review {...props}/>);
    const review = container.querySelector('.review');


    expect(review.querySelector('.name').innerHTML).toEqual('Juntao');
    expect(review.querySelector('.date').innerHTML).toEqual('2018/06/21');
    expect(review.querySelector('.content').innerHTML)
      .toEqual('Excellent work, really impressive on the efforts you put');
  });

  it('editing', () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressive on the efforts you put'
      },
    };

    const {getByText} = render(<Review {...props}/>);
    const button = getByText('Edit');

    expect(button.innerHTML).toEqual('Edit');

    userEvent.click(button);

    expect(button.innerHTML).toEqual('Submit');
  });
});