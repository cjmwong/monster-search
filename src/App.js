import './App.css';
import { useState, useEffect } from "react"; 
import { CardList } from "./components/cardlist/cardlist.component";
import { SearchBar } from './components/searchbar/searchbar.component';
import axios from 'axios';

const handleInput = e => { 
  console.log(e.target.value) 
};

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => { 
    const fetchMonsters = async () => { 
      const response = await axios("https://jsonplaceholder.typicode.com/user", );
      const users = await response.json(); 
      setMonsters(users); 
    }; 
    fetchMonsters(); }, []);
  
  return (
    <div className="App">
      <h1>Monseter Rolodex</h1>
      <SearchBar 
      placeholder='Search Monster' 
      handleInput={handleInput} 
      />
      <CardList monster = {monsters} />
    </div>
  )
}

export default App;
