/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recipe from '../components/Recipe';
import { fetchRecipes } from '../action';
import styles from '../style/style.module.css';

const ItemList = ({ recipes, fetchRecipes }) => {
  const [fil, setFil] = useState('');
  useEffect(() => {
    fetchRecipes();
  }, []);

  const search = (recipes) => recipes.recipes.results.filter((result) => result.title
    .toLowerCase().indexOf(fil) > -1);

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for recipes"
        value={fil}
        onChange={(e) => setFil((e.target.value).toLowerCase())}
      />
      <Recipe recipes={search(recipes)} />
    </div>
  );
};
export const mapStateToProps = (state) => ({
  recipes: state.recipe,

});

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),

});
ItemList.propTypes = {
  recipes: PropTypes.object,
  fetchRecipes: PropTypes.func.isRequired,

};
ItemList.defaultProps = {
  recipes: {},

};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
