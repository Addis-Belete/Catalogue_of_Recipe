import '../style/App.css';
import ItemList from '../container/ItemList';
import SearchBar from '../container/SearchBar';

const App = () => (
  <div className="App">
    <SearchBar />
    <ItemList />
  </div>
);

export default App;
