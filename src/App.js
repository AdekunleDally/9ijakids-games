import React, {Component} from 'react'
import './App.css'
import CardList from './components/card-list/cardlist.component'
import GAMES_DATA from './games.data'; 

class App extends Component {
  constructor(){
    super();

    this.state={
     games: GAMES_DATA,
     searchTerm:""
    }



  // componentDidMount(){
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(response=>response.json())
  //   .then(users=> console.log(users))
  // }

  }
  handleChange=e=>{
    //console.log(e.target.value)
    this.setState({searchTerm:e.target.value})
  }

  render(){
    const {games, searchTerm} =this.state;
    const filteredGamesByTopic= games.filter(game=>game.Topic.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <div className="app">
         <input type='search' placeholder= 'searchTerm' onChange={this.handleChange} className="input" />
         <CardList games={filteredGamesByTopic} />
      </div>
    )
  }
}

export default App
