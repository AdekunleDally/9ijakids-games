import React from 'react';
import './card.styles.scss';

const Card =props=>{
    return (
        <div className="card">
        <img alt="monster" className="img" src={`https:///partners.9ijakids.com/index.php/thumbnail?game=${props.game.id}`} />
        <h1 className="title">{props.game.GameTitle}</h1>
        <p className="description">{props.game.GameDescription}</p>
        <p className="topic">{props.game.Topic}</p>
        </div>
    )
}
export default Card