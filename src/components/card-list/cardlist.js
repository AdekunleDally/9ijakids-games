import React from 'react';
import './cardlist.styles.scss';
import Card from '../card/card';

function CardList({games}){
    return (
        <div className="cardlist">
        {
            games.map(game=>(
              <Card key={game.id} game={game} />
          ))
        }
        </div>
    )
}
export default CardList