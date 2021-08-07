import React from 'react';

const CategoryFilter = () => {
  const category = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork',
    'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];
  return (
    <select name="category" id="cat">
      {category.map((cat) => (
        <option value="cat" key={cat}>{cat}</option>

      ))}

    </select>

  );
};
export default CategoryFilter;
