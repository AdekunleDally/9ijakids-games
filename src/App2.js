
import React, {Component} from 'react'
import './App.css'
import Button from './components/button/button.component';
import CardList from './components/card-list/cardlist.component'
import GAMES_DATA from './games.data'; 

class App extends Component {
  constructor(){
    super();

    this.state={
     games: GAMES_DATA,
     searchTerm:"",
     filteredGroupValue: "",
     filteredLevelValue: ""
    }

  }

  handleChange=e=>{
    this.setState({searchTerm:e.target.value})
  }

  filterByGroup=(button)=>{
   // const filterAcademic= this.state.games.filter(game=>game.Group === button );
    this.setState({filteredGroupValue: button })
    console.log(this.state.filteredGroupValue)
   // return filterAcademic;
  }  


  filterByLevel=(button)=>{
    // const filterAcademic= this.state.games.filter(game=>game.Group === button );
     this.setState({filteredLevelValue: button })
     console.log(this.state.filteredLevelValue)
   }  


  render(){
    const {games, searchTerm, filteredGroupValue,filteredLevelValue} =this.state;
    const topicFilter= games.filter(game=>game.Topic.toLowerCase().includes(searchTerm.toLowerCase()))
    const groupFilter= this.state.games.filter(game=>game.Group === filteredGroupValue );
    const levelFilter= this.state.games.filter(game=>game.Level === filteredLevelValue );



    return (
      <div className="app">
         <div>
           <h1>9ijakids Game List</h1>
         </div>
         <input type='search' placeholder= 'searchTerm' onChange={this.handleChange} className="input" />
         <CardList games={topicFilter} />

         <Button filterByGroup={this.filterByGroup} filterByLevel={this.filterByLevel} />
         <CardList groupGames={groupFilter} levelgames={levelFilter}  /> 

      </div>
    )
  }
}

export default App



































import React, {useState } from 'react';
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
      const filteredGroupData = games.filter(game=>game.Group===button);
      setGames(filteredGroupData)
    }
    return (
      <div className="app">
         <div>
           <h1>9ijakids Game List</h1>
         </div>
         <CardList games={games} />
         <Button button={buttons} filter={filter}/>
      </div>
    )
}

export default App









