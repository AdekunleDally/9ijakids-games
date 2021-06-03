import {useState} from 'react';
import components from './games.data'; 
import CardList from './components/card-list/cardlist'
import Button from './components/button/button';
//import Search from './components/search/search.component';
import './App.css';

const allGroups = ['All', ...new Set(components.map(component => component.Group))]
const allLevels = [ ...new Set(components.map(component=>component.Level))]
console.log(allLevels)

console.log(allGroups);

function App(){
  const[ games, setGames ] = useState(components);
 //const [searchTerm, setSearchTerm] =useState();
 const [ buttons, setButtons] =useState(allGroups);
 const [ levelButtons, setLevelButtons] =useState(allLevels);

 
    // const searchFilter=(userInput)=>{
    // const filteredGamesByTopic= games.filter(game=>game.Topic.toLowerCase().includes(searchTerm.toLowerCase()));
    // setSearchTerm(filteredGamesByTopic)
    // }
    
    const filters=(button)=>{
      if(button==="All"){setGames(components); return; }
      const filteredGroupData = components.filter(component=>component.Group===button);
      console.log(filteredGroupData)
      setGames(filteredGroupData)
    }

    const filterLevel=(btn_level)=>{
      console.log(btn_level)
      const filteredlevelData = components.filter(component=>component.Level===btn_level);
      console.log(filteredlevelData)
      setGames(filteredlevelData)
    }

    return (
      <div className="app">
         <div>
           <h1>9ijakids Game List</h1>
         </div>
         <Button button={buttons} filterGroup={filters} filterLevel={filterLevel} levelButtons={levelButtons}/>
         <CardList games={games} />
      </div>
    )
}

export default App









