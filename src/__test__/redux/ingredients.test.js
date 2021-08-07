import ingredientReducer from '../../reducer/ingredientReducer';

describe('Ingredients Reducer', () => {
  it('Checks if default state is returned', () => {
    const state = ingredientReducer(undefined, { type: '' });
    expect(state).toStrictEqual({{ ingredients: { meals: [{}] } }});
  });
});
