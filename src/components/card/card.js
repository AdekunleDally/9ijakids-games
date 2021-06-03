import React from 'react';
import './card.styles.scss';

function Card({game}){
    return (
        <div className="card">
        <img alt="monster" className="img" src={`https:///partners.9ijakids.com/index.php/thumbnail?game=${game.id}`} />
        <h1 className="title">{game.GameTitle}</h1>
        <p className="description">{game.GameDescription}</p>
        <p className="topic">{game.Topic}</p>
        </div>
    )
}
export default Card