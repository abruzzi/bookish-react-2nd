import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Review from "./Review";
import userEvent from "@testing-library/user-event";

import * as actions from '../redux/actions/actions';
import store from "../store";
import {Provider} from "react-redux";

const renderWithProvider = (component) => {
  return {...render(<Provider store={store}>
      {component}
    </Provider>)}
};

describe('Review', () => {
  it('renders', () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressive on the efforts you put'
      },
    };

    const {container} = renderWithProvider(<Review {...props}/>);
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

    const {getByText} = renderWithProvider(<Review {...props}/>);
    const button = getByText('Edit');

    expect(button.innerHTML).toEqual('Edit');

    userEvent.click(button);

    expect(button.innerHTML).toEqual('Submit');
  });

  it('copy content to a textarea for editing', () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressive on the efforts you put'
      },
    };

    const {getByText, container} = renderWithProvider(<Review {...props}/>);
    const button = getByText('Edit');
    const content = container.querySelector('p.content');

    expect(content).toBeInTheDocument();
    expect(container.querySelector('textarea[name="content"]')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(content).not.toBeInTheDocument();

    expect(container.querySelector('textarea[name="content"]')).toBeInTheDocument();
    expect(container.querySelector('textarea[name="content"]').innerHTML)
      .toEqual('Excellent work, really impressive on the efforts you put');
  });

  it('send requests', async () => {
    const fakeUpdateReview = () => {
      return () => {
        return Promise.resolve({})
      }
    };

    jest.spyOn(actions, 'updateReview').mockImplementation(() => fakeUpdateReview);

    const props = {
      review: {
        id: 123,
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressive on the efforts you put'
      },
    };

    const {getByText, container} = renderWithProvider(<Review {...props}/>);

    userEvent.click(getByText('Edit'));

    const content = container.querySelector('textarea[name="content"]');
    userEvent.type(content, 'Fantastic work');

    userEvent.click(getByText('Submit'));

    expect(actions.updateReview).toHaveBeenCalledWith(123, {...props.review, content: 'Fantastic work'});
  });
});