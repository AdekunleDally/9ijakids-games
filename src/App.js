import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
//import BookShelf from './components/bookshelf/bookshelf.component';
//import SearchButton from './components/search-button.component' ;
//import {Switch, Route} from 'react-router-dom';
import GAMES_DATA from './games.data'; 

class App extends Component {
  constructor(){
    super();

    this.state={
     Games: GAMES_DATA,
     searchField=" "
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=> console.log(users))
  }

  render() {
    const {Games} =this.state;
    return (
      <div className="app">
         <div className="naijakids-title" >
           <h1>9ija Kids Games</h1>
         </div>

        <div>
        {
          Games.map((Game)=>(
            <h1 key={Game.id}>{Game.GameTitle}</h1>
          ))
        }
        </div>

      </div>
    )
  }
}

export default App
