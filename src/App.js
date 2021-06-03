import {useState} from 'react';
import components from './games.data'; 
import CardList from './components/card-list/cardlist'
import Button from './components/button/button';
//import Search from './components/search/search.component';
import './App.css';

const allGroups = ['All', ...components.map(component=>component.Group)]

//console.log(allGroups);

function App(){
  const[ games, setGames ] = useState(components);
 //const [searchTerm, setSearchTerm] =useState();
 const [buttons, setButtons] =useState([allGroups]);

 
    // const searchFilter=(userInput)=>{
    // const filteredGamesByTopic= games.filter(game=>game.Topic.toLowerCase().includes(searchTerm.toLowerCase()));
    // setSearchTerm(filteredGamesByTopic)
    // }
    
    const filter=(button)=>{
      const filteredGroupData = components.filter(component=>component.Group===button);
      setGames(filteredGroupData)
    }
    return (
      <div className="app">
         <div>
           <h1>9ijakids Game List</h1>
         </div>
         <Button button={buttons} filter={filter}/>
         <CardList games={games} />
      </div>
    )
}

export default App









