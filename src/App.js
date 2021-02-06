import './App.css';
import TableList from './components/TableList/TableList';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="app-wrapper">
      <Search/>
      <TableList />
    </div>
  );
}

export default App;
