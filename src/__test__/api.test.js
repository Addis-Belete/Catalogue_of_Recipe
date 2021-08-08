import axios from 'axios';

describe('api data', () => {
  it('Tests if recipes  data recived', async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=Seafood').then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });
});
