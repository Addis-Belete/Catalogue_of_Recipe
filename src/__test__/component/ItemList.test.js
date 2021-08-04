import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ItemList from '../../container/ItemList';
import store from '../../store/store';

afterEach(cleanup);

it('should render the list of ingredients', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ItemList />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <ItemList />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
