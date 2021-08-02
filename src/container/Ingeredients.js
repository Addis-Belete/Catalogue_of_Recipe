/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'redux';
import { mapDispatchToProps, mapStateToProps } from './ItemList';

const Ingredients = ({ ingredients }) => (
  <div>
    {ingredients.map((ingredient) => (
      <p key={`${ingredient.name}`}>{ingredient.name}</p>

    ))}
  </div>

);

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
