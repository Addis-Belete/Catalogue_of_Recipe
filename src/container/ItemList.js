/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';

const ItemList = ({ recipes }) => (
  <Recipe recipes={recipes} />

);
const mapStateToProps = (state) => ({
  recipes: state.results,

});

export default connect(mapStateToProps)(ItemList);
