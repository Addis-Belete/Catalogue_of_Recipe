import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Recipe from '../../components/Recipe';
import store from '../../store/store';

afterEach(cleanup);

it('should render the list of ingredients', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Recipe />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <Recipe />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
