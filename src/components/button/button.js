import React from 'react';
import './button.styles.scss';

function Button({ button, levelButtons, filterGroup, filterLevel}){
  return (
    <div className="button">
      {
        button.map((grp, i)=>(
          <button type="button" key={i} className="btn" onClick={()=> filterGroup(grp)}>{grp}</button>
        ))
      } 

      {
        levelButtons.map((lvl, j)=>(
          <button type="button" key={j} className="btn" onClick={()=> filterLevel(lvl)}>{lvl}</button>
        ))
      }   
    </div>
  )
}

export default Button;