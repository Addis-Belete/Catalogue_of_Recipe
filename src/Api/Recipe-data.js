/* eslint-disable consistent-return */
/* eslint-disable no-console */
const RecipeData = async () => {
  try {
    const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=2b280d469bf44b1280528a91ec861d2a&number=20', { mode: 'cors' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default RecipeData;
