import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Ingredients from '../../container/Ingeredients';
import store from '../../store/store';

afterEach(cleanup);
it('displays Ingredients', () => {
  const recipe = [{ title: 'add', id: 123, image: '.jepg' }];
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Ingredients recipes={recipe} />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText('Ingredients')).toBeTruthy();
});

it('should render the list of ingredients', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Ingredients />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <Ingredients />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
