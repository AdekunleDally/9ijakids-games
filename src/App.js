import React, {useState} from 'react';
import components from './games.data'; 
import CardList from './components/card-list/cardlist'
import Button from './components/button/button';
import './App.css';

const allGroups = ['All', ...new Set(components.map(component => component.Group))]
const allLevels = [ ...new Set(components.map(component=>component.Level))]

function App(){
  const[ games, setGames ] = useState(components);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] =useState([]);
  const [ buttons, setButtons] =useState(allGroups);
  const [ levelButtons, setLevelButtons] =useState(allLevels);

const searchFilter=(value)=>{
  setSearchTerm(value);
  filteredTopics(value)
};

const filteredTopics=value=>{
  const filteredGamesByTopic= components.filter(component=> component.Topic.toLowerCase().includes(value.toLowerCase()));
  setSearchResults(filteredGamesByTopic)
  console.log(searchResults)
}

const filters=(button)=>{
  if(button==="All"){setGames(components); return; }
  const filteredGroupData = components.filter(component=>component.Group===button);
  console.log(filteredGroupData)
  setGames(filteredGroupData)
}

const filterLevel=(btn_level)=>{
  const filteredlevelData = components.filter(component=>component.Level===btn_level);
  console.log(filteredlevelData)
  setGames(filteredlevelData)
}

  return (
    <div className="app">
      <div>
        <h1>9ijakids Game List</h1>
      </div>
      <input type='search' placeholder= 'search by topic' onChange={e=>searchFilter(e.target.value)} className="input"  />
      <div className="box-container">
        <CardList games={searchResults} />
        {games.length ===0 && <span>No records Found</span>}
      </div>
      <Button button={buttons} filterGroup={filters} filterLevel={filterLevel} levelButtons={levelButtons}/>
        <CardList games={games} />
      </div>
  )
}

export default App









