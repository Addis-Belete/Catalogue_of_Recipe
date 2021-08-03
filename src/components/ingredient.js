/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { fetchIngredients } from '../action/ingredient';

class Ingredient extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-undef
    this.state = {
      id: null,

    };
  }

  componentDidMount() {
    const ids = this.props.match.params.recipe_id;
  }

  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>

      </div>

    );
  }
}
export default Ingredient;
