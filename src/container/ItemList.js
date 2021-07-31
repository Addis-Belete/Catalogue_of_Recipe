import React from 'react';
import { connect } from 'react-redux';

const ItemList = ({ recipe }) => (
  <div>
    This component is responsible to display all recipe lists
  </div>

);
const mapStateToProps = (state) => ({
  recipe: state.recipeReducer.results,

});

export default connect(mapStateToProps)(ItemList);
