/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { fetchRecipes } from '../action';

const ItemList = ({ recipes }) => (
  <Recipe recipes={recipes} />

);
const mapStateToProps = (state) => ({
  recipes: state.results,

});
const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),

});

export default connect(mapStateToProps)(ItemList);
