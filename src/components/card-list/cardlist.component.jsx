import React from 'react';
import './cardlist.styles.scss';
import Card from '../card/card.component';

const CardList =props=>{
    return (
        <div className="cardlist">
        {
            props.games.map(game=>(
              <Card key={game.id} game={game} />
          ))
        }
        </div>
    )
}
export default CardList